import React from "react";

type DataListProps = {
    dataArray: string[],
    ordered?: boolean
}

const DataList:React.FC<DataListProps> = ({dataArray, ordered=false}) => {
    const data = dataArray.map(data => <li key={`todo-${data}`}>{data}</li>)

    return (
        <div>
            { ordered ?
                <ol>{data}</ol>
                :
                <ul>{data}</ul>
            }
        </div>
    )

}


export default DataList