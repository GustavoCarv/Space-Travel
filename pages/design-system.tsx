import type { NextPage } from 'next'


const styles: {[key: string]: React.CSSProperties } = { 
    padding: {
        padding: '1rem',
    },
}


const DesignSystem: NextPage = () => {
  return (
    <div className='bg-blue-dark'>
        
        <div className="container">
            <h1>Design system</h1>
            
            
            <div className='bg-blue-light text-blue-dark'  style={styles.padding}>
                light blue bg, with dark text
            </div>
            
            <div className="">
                white bg, with dark text
            </div>
            
            <div className="" >
                light blue bg with a 20% alpha and white text
            </div>
            
        </div>
    </div>
  )
}

export default DesignSystem
