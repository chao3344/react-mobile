import React, { Component } from 'react';
import { Grid } from 'antd-mobile';
import Img from 'imgs/images/search-icon.png'
import Img2 from 'imgs/images/search-icon2.png'

const arr = [
    {x:-(180*0.625)+'px',y:-(195*0.625)+'px',img:Img,sizeX:(300*0.625)+'px',sizeY:(280*0.625)+'px',title:'机票'},
    {x:(5*0.625)+'px',y:-(135*0.625)+'px',img:Img,sizeX:(300*0.625)+'px',sizeY:(280*0.625)+'px',title:'附近'},
    {x:-(120*0.625)+'px',y:-(135*0.625)+'px',img:Img,sizeX:(300*0.625)+'px',sizeY:(280*0.625)+'px',title:'海外'},
    {x:-(117*0.625)+'px',y:-(195*0.625)+'px',img:Img,sizeX:(300*0.625)+'px',sizeY:(280*0.625)+'px',title:'火车票'},
    {x:-(240*0.625)+'px',y:-(195*0.625)+'px',img:Img,sizeX:(300*0.625)+'px',sizeY:(280*0.625)+'px',title:'汽车票'},
    {x:-(240*0.625)+'px',y:-(135*0.625)+'px',img:Img,sizeX:(300*0.625)+'px',sizeY:(280*0.625)+'px',title:'民宿'},
    {x:-(180*0.625)+'px',y:-(135*0.625)+'px',img:Img,sizeX:(300*0.625)+'px',sizeY:(280*0.625)+'px',title:'钟点房'},
    {x:-(180*0.625)+'px',y:-(60*0.625)+'px',img:Img2,sizeX:(240*0.625)+'px',sizeY:(240*0.625)+'px',title:'门票'},
    {x:-(60*0.625)+'px',y:-(135*0.625)+'px',img:Img,sizeX:(300*0.625)+'px',sizeY:(280*0.625)+'px',title:'特惠'},
]

const data = Array.from(arr).map((_val, i) => ({
    icon: _val.img,
    x:_val.x,
    y:_val.y,
    sizeX:_val.sizeX,
    sizeY:_val.sizeY,
    text:_val.title
}));

class SearchList extends Component {
    render() {
        return (
            <div style={{border:'1px solid #ddd',background:'#fff',marginTop:'.15rem'}}>

                <Grid 
                    data={data} 
                    hasLine={false}
                    columnNum={5} 
                    renderItem={dataItem => (
                        
                        <div style={{ padding: '0vw 3vw 1.33vw',textAlign:'center' }}>
                            <i  style={{display:'inline-block', width: '.32rem', height: '.35rem', background:`url(${dataItem.icon})`,backgroundPosition:`${dataItem.x} ${dataItem.y}`,backgroundSize:`${dataItem.sizeX} ${dataItem.sizeY}`}} alt="" />
                            <div style={{ color: '#888', fontSize: '12px', marginTop: '1px' }}>
                            <span style={{color:'#000'}}>{dataItem.text}</span>
                            </div>
                        </div>
                        
                    )}
                />

            </div>
        );
    }
}

export default SearchList;