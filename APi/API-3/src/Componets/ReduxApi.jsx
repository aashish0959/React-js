import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApi } from './path-to-actions'; // Make sure to import your action

export default function ReduxApi() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchApi()); // Dispatch your API fetch action
    }, [dispatch]); // Add dispatch to dependency array

    const record = useSelector((state) => state.apiKey); // Correctly accessing state

    return (
        <div>
            <h1>ReduxApi</h1>
            {record && record.data ? ( // Add a check for record and data
                record.data.map((e, i) => (
                    <ul key={i}>
                        <li>{e.title}</li>
                    </ul>
                ))
            ) : (
                <p>Loading...</p> // Show loading text if data is not available
            )}
        </div>
    );
}
