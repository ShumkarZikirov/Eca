import React from 'react';
import { useSelector } from 'react-redux';
const ProjectItemText = ({year, ru, en}) => {
	const { lang } = useSelector(state => state.mainReducer)
    return (
        <>
            {lang ? ru : en}{year === undefined ? '' : ','} {`${year === undefined ? '' : year}`}
        </>
    );
};

export default ProjectItemText;