import React from 'react'
import Select from 'react-select'
import './Search.css'


const options = [
    { value: 'test1', label: 'Test1' },
    { value: 'test2', label: 'Test2' },
]

function Search({style}){
    return (<div style={style} className="select form-test">
        <Select options={options} isMulti placeholder="Categories" className="form-test" />
    </div>
    )
}



export default Search;
