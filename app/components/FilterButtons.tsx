import { motion, LayoutGroup } from 'framer-motion'
import clsx from 'clsx'

interface FilterButtonsProps {
  filters: Array<{ title: string; value: string }>
  activeFilter: string
  onFilterChange: (value: string) => void
}

export const FilterButtons = ({
  filters,
  activeFilter,
  onFilterChange,
}: FilterButtonsProps) => (
  <div className="flex justify-center lg:justify-end w-full rounded-2xl">
    <div className="flex gap-3 md:gap-10">
      <LayoutGroup>
        {filters.map((filter) => (
          <motion.button
            layout
            key={filter.title}
            className={clsx(
              activeFilter === filter.value
                ? 'text-blue-600'
                : 'no-underline text-gray-900 dark:text-white',
              'relative transition-all duration-300 ease-linear',
              'md:text-lg text-xs hover:text-blue-600'
            )}
            onClick={() => onFilterChange(filter.value)}
          >
            {filter.title}
            {activeFilter === filter.value && (
              <motion.span
                layoutId="underline"
                className="absolute top-full left-0 w-full h-1 rounded-2xl bg-blue-600"
              />
            )}
          </motion.button>
        ))}
      </LayoutGroup>
    </div>
  </div>
)

export default FilterButtons
