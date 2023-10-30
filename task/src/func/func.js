import axios from 'axios';

export const fetchAllData = () => async (dispatch) =>
{
    try
    {
        dispatch({type : 'DATA_REQUEST'})

        const {data} = await axios.get("https://api.quicksell.co/v1/internal/frontend-assignment/");
        console.log(data)

        dispatch({type : 'DATA_SUCCESS', payload : data});

    }
    catch(error)
    {
        dispatch({type : 'DATA_FAILURE'})
    }
}

export const selectData = (group, allTickets, orderValue) => async (dispatch) =>{
    try
    {
        dispatch({type : 'SELECT_DATA_REQUEST'})

        let user = false;
        let container = new Set();
        let arr = [], selectedData = [];

        if(group === 'status')
        {
            allTickets.forEach((elem) => 
            {
                container.add(elem.status);
            })

            arr = [...container];

            arr.forEach((elem, index) => {
                let arr = allTickets.filter((fElem) => {
                    return elem === fElem.status;
                })
                selectedData.push({
                    [index] : {
                        title : elem, 
                        value : arr
                    }
                })
            })
        }else if (group === 'user') {
            user = true;
            if (allTickets && allTickets.allUser && allTickets.allTickets) {
                allTickets.allUser.forEach((elem, index) => {
                    const arr = allTickets.allTickets.filter((Felem) => {
                        return elem.id === Felem.userId;
                    });
        
                    selectedData.push({
                        [index]: {
                            title: elem.name,
                            value: arr
                        }
                    });
                });
            }
            
        }
        else
        {
            let priority_list = ["Urgent" , "High" , "Medium", "Low","No Priority"];

            priority_list.forEach((elem, index) => {
                arr = allTickets.filter((fElem) => {
                    return index === fElem.priority;
                })

                selectedData.push({
                    [index] : {
                        title : elem,
                        value : arr
                    }
                })
            })
    }

    if(orderValue === "title"){
        selectedData.forEach((elem,index) => {
            if (elem[index] && elem[index].value) {
                elem[index].value.sort((a, b) => a.title.localeCompare(b.title));
            }
            
        })
    }
    dispatch({type : 'SELECT_DATA_SUCCESS', payload : {selectedData, user}});
    }
catch(error)
{
    dispatch({ type : 'SELECT_DATA_FAILURE', payload : error.message})
}
    }