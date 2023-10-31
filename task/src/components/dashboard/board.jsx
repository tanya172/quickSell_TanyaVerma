import React from "react";
import {useSelector} from "react-redux";
import { GiNetworkBars } from "react-icons/gi";
import {AiOutlinePlus} from "react-icons/ai";
import "./board.css";
import Card from "../card/card";

const Board = () => {
    const { selectedData, user} = useSelector(
        (state) => state.SelectDataReducer
    );

 return (
   selectedData && (
    <div className="dashContainer">
        {selectedData.map((elem,index) => {
            return(
                <>
                    <div key={index} className="dashCardContainer">
                        <div className="dashCardHeading">
                            <div className="leftView">
                                {!user ? (
                                    <GiNetworkBars />
                                ) : (
                                    <>
                                        <div
                                        className="imageContainer relative"
                                        style={{ width: "15px", height: "15px", display :'inline-block'}}>
                                            <img
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                borderRadius: "50%",
                                            }}
                                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                            alt="UserImage"
                          />
                                        </div>
                                    </>
                                )}
                                <span>
                                    {" "}
                                   {elem[index]?.title} {elem[index]?.value?.length}
                                </span>
                            </div>
                            <div className="rightView">
                                <AiOutlinePlus/>{" "}
                                <span style={{ letterSpacing : "2px" }}>...</span>
                            </div>
                        </div>
                        <div className="dashList">
                            {elem[index]?.value?.map((elem,ind) => {
                                return(
                                    <Card id={elem.id} title={elem.title} tag={elem.tag}/>
                                );
                            })}
                        </div>
                    </div>
                </>
            );
        })}
    </div>
   )
 ); 
};

export default Board;