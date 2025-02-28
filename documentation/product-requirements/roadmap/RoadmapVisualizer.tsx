import React, { useState, useEffect, useMemo, MouseEvent } from 'react';
import { format } from 'date-fns';
import { motion, AnimatePresence } from 'framer-motion';

// Types
interface RoadmapConfig {
  roadmapTitle: string;
  timelineConfig: {
    startDate: string;
    endDate: string;
    timeUnits: string[];
    defaultView: string;
  };
  categories: {
    id: string;
    name: string;
    color: string;
    order: number;
  }[];
  statusTypes: {
    id: string;
    name: string;
    color: string;
    order: number;
  }[];
  priorityLevels: {
    id: string;
    name: string;
    color: string;
    order: number;
  }[];
  displayOptions: {
    showDependencies: boolean;
    showProgress: boolean;
    showMilestones: boolean;
    compactView: boolean;
    darkMode: boolean;
    filterByCategory: string[];
    filterByStatus: string[];
    filterByPriority: string[];
  };
}

interface Feature {
  id: string;
  name: string;
  description: string;
  category: string;
  status: string;
  priority: string;
  startDate: string;
  endDate: string;
  progress: number;
  dependencies: string[];
  owner: string;
  contributors: string[];
  documentationPath: string;
  implementationPath: string;
}

interface Milestone {
  id: string;
  name: string;
  date: string;
  description: string;
  features: string[];
  status: string;
}

interface RoadmapData {
  lastUpdated: string;
  features: Feature[];
  milestones: Milestone[];
}

interface RoadmapVisualizerProps {
  configPath?: string;
  dataPath?: string;
  onRefresh?: () => Promise<void>;
  className?: string;
}

interface FilterState {
  categories: Set<string>;
  status: Set<string>;
  priority: Set<string>;
  search: string;
}

const defaultConfig: RoadmapConfig = {
  roadmapTitle: 'Product Roadmap',
  timelineConfig: {
    startDate: '2023-01-01',
    endDate: '2025-12-31',
    timeUnits: ['quarter', 'month'],
    defaultView: 'quarter'
  },
  categories: [],
  statusTypes: [],
  priorityLevels: [],
  displayOptions: {
    showDependencies: true,
    showProgress: true,
    showMilestones: true,
    compactView: false,
    darkMode: false,
    filterByCategory: [],
    filterByStatus: [],
    filterByPriority: []
  }
};

export const RoadmapVisualizer: React.FC<RoadmapVisualizerProps> = ({
  configPath = '/documentation/product-requirements/roadmap/roadmap-config.json',
  dataPath = '/documentation/product-requirements/roadmap/roadmap-data.json',
  onRefresh,
  className = ''
}) => {
  // State
  const [config, setConfig] = useState<RoadmapConfig>(defaultConfig);
  const [data, setData] = useState<RoadmapData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [timeUnit, setTimeUnit] = useState<string>(config.timelineConfig.defaultView);
  const [filters, setFilters] = useState<FilterState>({
    categories: new Set<string>(),
    status: new Set<string>(),
    priority: new Set<string>(),
    search: ''
  });
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  // Load data
  useEffect(() => {
    const loadData = async (): Promise<void> => {
      try {
        setLoading(true);
        const [configResponse, dataResponse] = await Promise.all([
          fetch(configPath),
          fetch(dataPath)
        ]);
        
        const configData = await configResponse.json();
        const roadmapData = await dataResponse.json();
        
        setConfig(configData);
        setData(roadmapData);
        setError(null);
      } catch (err) {
        setError('Failed to load roadmap data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
  }, [configPath, dataPath]);

  // Filtered features
  const filteredFeatures = useMemo(() => {
    if (!data) return [];
    
    return data.features.filter((feature: Feature) => {
      const matchesCategory = filters.categories.size === 0 || filters.categories.has(feature.category);
      const matchesStatus = filters.status.size === 0 || filters.status.has(feature.status);
      const matchesPriority = filters.priority.size === 0 || filters.priority.has(feature.priority);
      const matchesSearch = !filters.search || 
        feature.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        feature.description.toLowerCase().includes(filters.search.toLowerCase());
      
      return matchesCategory && matchesStatus && matchesPriority && matchesSearch;
    });
  }, [data, filters]);

  // Handle refresh
  const handleRefresh = async (): Promise<void> => {
    if (onRefresh) {
      try {
        setLoading(true);
        await onRefresh();
        const [configResponse, dataResponse] = await Promise.all([
          fetch(configPath),
          fetch(dataPath)
        ]);
        
        const configData = await configResponse.json();
        const roadmapData = await dataResponse.json();
        
        setConfig(configData);
        setData(roadmapData);
        setError(null);
      } catch (err) {
        setError('Failed to refresh roadmap data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" />
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px] text-red-500">
        <div className="text-center">
          <p className="text-lg font-semibold mb-2">{error}</p>
          <button
            onClick={handleRefresh}
            className="px-4 py-2 bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // No data state
  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px] text-gray-500">
        <p>No roadmap data available</p>
      </div>
    );
  }

  return (
    <div className={`bg-white dark:bg-gray-900 ${className}`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-6 p-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          {config.roadmapTitle}
        </h1>
        <div className="flex items-center space-x-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Last updated: {format(new Date(data.lastUpdated), 'PPP')}
          </p>
          <button
            onClick={handleRefresh}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Refresh
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
        {/* Search */}
        <div className="flex-1 min-w-[200px]">
          <input
            type="text"
            placeholder="Search features..."
            value={filters.search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilters(f => ({ ...f, search: e.target.value }))}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
          />
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2">
          {config.categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilters(f => ({
                ...f,
                categories: f.categories.has(category.id)
                  ? new Set([...f.categories].filter(id => id !== category.id))
                  : new Set([...f.categories, category.id])
              }))}
              className={`px-3 py-1 rounded-full text-sm ${
                filters.categories.has(category.id)
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Status filter */}
        <div className="flex flex-wrap gap-2">
          {config.statusTypes.map((status) => (
            <button
              key={status.id}
              onClick={() => setFilters(f => ({
                ...f,
                status: f.status.has(status.id)
                  ? new Set([...f.status].filter(id => id !== status.id))
                  : new Set([...f.status, status.id])
              }))}
              className={`px-3 py-1 rounded-full text-sm ${
                filters.status.has(status.id)
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              {status.name}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="overflow-x-auto">
        <div className="min-w-[800px] p-4">
          {/* Timeline header */}
          <div className="grid grid-cols-[200px_1fr] mb-4">
            <div className="font-semibold">Feature</div>
            <div className="grid grid-cols-12 gap-1">
              {Array.from({ length: 12 }, (_, i) => (
                <div
                  key={i}
                  className="text-center text-sm text-gray-500 dark:text-gray-400"
                >
                  {format(new Date(2023, i), 'MMM')}
                </div>
              ))}
            </div>
          </div>

          {/* Timeline rows */}
          <div className="space-y-4">
            {filteredFeatures.map((feature: Feature) => (
              <div
                key={feature.id}
                className="grid grid-cols-[200px_1fr] items-center"
              >
                <div className="font-medium text-gray-900 dark:text-white">
                  {feature.name}
                </div>
                <div className="relative h-8">
                  <div
                    className="absolute h-full rounded-full"
                    style={{
                      left: `${getTimelinePosition(feature.startDate)}%`,
                      width: `${getTimelineWidth(feature.startDate, feature.endDate)}%`,
                      backgroundColor: getStatusColor(feature.status, config)
                    }}
                  >
                    <div
                      className="h-full rounded-full bg-white bg-opacity-30"
                      style={{ width: `${feature.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature details */}
      <AnimatePresence>
        {selectedFeature && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={() => setSelectedFeature(null)}
          >
            <div
              className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              {/* Feature detail content */}
              {data.features.find(f => f.id === selectedFeature) && (
                <FeatureDetail
                  feature={data.features.find(f => f.id === selectedFeature)!}
                  config={config}
                  onClose={() => setSelectedFeature(null)}
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Helper component for feature details
const FeatureDetail: React.FC<{
  feature: Feature;
  config: RoadmapConfig;
  onClose: () => void;
}> = ({ feature, config, onClose }) => {
  const status = config.statusTypes.find(s => s.id === feature.status);
  const category = config.categories.find(c => c.id === feature.category);
  const priority = config.priorityLevels.find(p => p.id === feature.priority);

  return (
    <div>
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          {feature.name}
        </h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="space-y-4">
        <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Status</p>
            <p className="font-medium text-gray-900 dark:text-white">
              {status?.name || feature.status}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Category</p>
            <p className="font-medium text-gray-900 dark:text-white">
              {category?.name || feature.category}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Priority</p>
            <p className="font-medium text-gray-900 dark:text-white">
              {priority?.name || feature.priority}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Progress</p>
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full mt-2">
              <div
                className="h-full bg-blue-500 rounded-full"
                style={{ width: `${feature.progress}%` }}
              />
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Timeline</p>
          <div className="flex items-center space-x-4">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Start</p>
              <p className="font-medium text-gray-900 dark:text-white">
                {format(new Date(feature.startDate), 'PP')}
              </p>
            </div>
            <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">End</p>
              <p className="font-medium text-gray-900 dark:text-white">
                {format(new Date(feature.endDate), 'PP')}
              </p>
            </div>
          </div>
        </div>

        {feature.dependencies.length > 0 && (
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Dependencies</p>
            <div className="flex flex-wrap gap-2">
              {feature.dependencies.map((dep: string) => (
                <span
                  key={dep}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm text-gray-700 dark:text-gray-300"
                >
                  {dep}
                </span>
              ))}
            </div>
          </div>
        )}

        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Team</p>
          <div className="space-y-2">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Owner</p>
              <p className="font-medium text-gray-900 dark:text-white">{feature.owner}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Contributors</p>
              <div className="flex flex-wrap gap-2">
                {feature.contributors.map((contributor: string) => (
                  <span
                    key={contributor}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm text-gray-700 dark:text-gray-300"
                  >
                    {contributor}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <a
            href={feature.documentationPath}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
          >
            View Documentation
          </a>
          <a
            href={feature.implementationPath}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
          >
            View Implementation Plan
          </a>
        </div>
      </div>
    </div>
  );
};

// Helper functions
function getTimelinePosition(date: string): number {
  const start = new Date('2023-01-01');
  const current = new Date(date);
  const totalDays = 365;
  const daysPassed = Math.floor((current.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  return (daysPassed / totalDays) * 100;
}

function getTimelineWidth(startDate: string, endDate: string): number {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const totalDays = 365;
  const duration = Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  return (duration / totalDays) * 100;
}

function getStatusColor(statusId: string, config: RoadmapConfig): string {
  const status = config.statusTypes.find(s => s.id === statusId);
  return status?.color || '#9AA0A6';
}

export default RoadmapVisualizer; 