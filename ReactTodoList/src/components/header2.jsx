import { useTypewriter, Cursor } from 'react-simple-typewriter'

export default function Header2() {
    const {text} = useTypewriter({
        words: ['ToDo List'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
    });
    return (
        <div>
        <h1 style={{margin:'50px'}}>
           
            <span style={{fontWeight: 'bold', color:'green'}}>
                {text}
            </span>
            <span style={{color:'red'}}>
                <Cursor/>

            </span>
        </h1>
        </div>
       
      
    )
       
  
}