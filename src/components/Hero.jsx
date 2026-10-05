
function Hero(){
    return(
        <section className="flex min-h-[70vh] flex-col item-center justify-center gap-10 px-6 py-12 md:gap-16 md:px-16">
            <div className="max-w-6x1 mx-auto flex items-center gap-10">
                
                

                <h1 className="text-5x1 font-bold max" text-center md:text-left>
                    <p className="text-1g font-medium text-blue-700">Hello, I am Jeff</p>
                    <h1 className="text-3x1 font-bold text-slate-900 md:text-4x1">Software Developer</h1>

                </h1>

                <div>
                    <img src="/myProfile.jpeg" alt="JEFF KIMANI MAINA"  
                    className="h-64 w-64 shrink-0 rounded-1g object-cover shadow-md md:h-72 md:w-72"/>
        
                    
                </div>

                <p className="text-base leading-relaxed text-slate-700">
                    I built web applications which are responsive and 
                    also find the solution of the problems.


                </p>

                <div className="mt-8 flex gap-4">
                    <a href="#projects">
                        
                        
                    </a>

                </div>

            </div>
        </section>
    )
}

export default Hero