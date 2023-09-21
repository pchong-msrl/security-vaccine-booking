import {FC, ReactNode} from "react";

interface PageBodyProps {
    children?: ReactNode;
}
const Contraner:FC<PageBodyProps> = ({children})=>{
    return <>
        <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
            <div style={{display:"flex", flexDirection:"column", width:"40%"}}>
                {children}
            </div>
        </div>
    </>
}

export default Contraner
