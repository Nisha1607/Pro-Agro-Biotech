import React from 'react';
const Content=() => {

  const data=(
  	<div className="box" style={{
		backgroundImage: `url(${"https://i.pinimg.com/originals/18/42/81/184281f0fe87517a950beb8112c308dd.gif"})`,
		backgroundPosition: 'center',
		backgroundRepeat:'no-repeat',
		height:'100vh'
	 }}>
		
  	</div>
  )

  return (
    <main className="content">
		
	    {data}
	    
    </main>
  )
}

export default Content;