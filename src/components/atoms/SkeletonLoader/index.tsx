import classNames from 'classnames';
import React from 'react';

interface ISkeletonLoaderProps {
    width?: string;
    height?: string;
    visible?: boolean;
    round?: boolean;
}

const SkeletonLoader: React.FC<ISkeletonLoaderProps> = ({
    width,
    height,
    visible = true,
    round = false
}) => {
    return (
        <React.Fragment>
            { !visible ? null : (
                <span
                    className={ classNames('skeleton-loader', {
                        'skeleton-loader--round': round
                    }) }
                    style={{ width, height }}
                />
            ) }
        </React.Fragment>
    );
};

export default SkeletonLoader;
