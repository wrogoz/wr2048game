import styled,{keyframes,css} from 'styled-components';

const moveNumToRight=keyframes`
 from{

  transform:translateX(-30px);
 }
 to{

transform:translateX(0px);
 }
`
const moveNumToLeft=keyframes`
 from{

  transform:translateX(30px);
 }
 to{

transform:translateX(0px);

 }
`
const moveNumToBottom=keyframes`
 from{

  transform:translateY(-30px);
 }
 to{

transform:translateX(0px);
 }
`
const moveNumToTop=keyframes`
 from{

  transform:translateY(30px);
 }
 to{

transform:translateX(0px);
 }
`


const tileAnimationTop =
  css`
    ${moveNumToTop } 0.5s ease-in;
  `

  const tileAnimationBottom =
  css`
    ${moveNumToBottom } 0.5s ease-in;
  `

const tileAnimationRight =
  css`
    ${moveNumToRight } 0.5s ease-in;
  `

const tileAnimationLeft =
  css`
    ${moveNumToLeft } 0.5s ease-in;
  `
export const TileNumb:any=styled.p`

    animation:${(props:any)=>props.animate==='left'?tileAnimationLeft:null};
    animation:${(props:any)=>props.animate==='right'?tileAnimationRight:null};
    animation:${(props:any)=>props.animate==='bottom'?tileAnimationBottom:null};
    animation:${(props:any)=>props.animate==='top'?tileAnimationTop:null};
    font-size: 2rem;
    color:#777;

  `
