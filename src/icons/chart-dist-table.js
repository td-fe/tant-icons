import React from 'react';
import PropTypes from 'prop-types';

const loadingCircleStyle =
  '@keyframes loadingCircle { 100% { transform: rotate(360deg) }} ';

const ChartDistTable = props => {
  const {
    color,
    size,
    spin,
    style,
    className,
    iconClassName,
    ...otherProps
  } = props;
  return (
    <span
      role="img"
      className={
        className
          ? 'tant-icon-span anticon ' + className
          : 'tant-icon-span anticon'
      }
    >
      <style children={loadingCircleStyle} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        {...otherProps}
        className={iconClassName}
        style={{
          ...style,
          ...(spin
            ? {
                animationDuration: '1s',
                animationIterationCount: 'infinite',
                animationName: 'loadingCircle',
                animationTimingFunction: 'linear'
              }
            : {})
        }}
      >
        <path d="M2 2h2v9H2V2zm5 1H5v2h2V3zm0 3H5v2h2V6zm4 3h2v2h-2V9zm-1-3H8v2h2V6zM8 9h2v2H8V9zM7 9H5v2h2V9zm15-2a1 1 0 00-1-1h-7v6H2v7a1 1 0 001 1h18a1 1 0 001-1V7zm-2 1v4h-4V8h4zm0 6v4h-4v-4h4zm-6 4h-4v-4h4v4zm-6 0H4v-4h4v4z"></path>
      </svg>
    </span>
  );
};

ChartDistTable.propTypes = {
  iconClassName: PropTypes.string,
  spin: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ChartDistTable.defaultProps = {
  spin: false,
  color: 'currentColor',
  size: '1em'
};

export default ChartDistTable;
