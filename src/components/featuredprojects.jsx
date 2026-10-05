export default function Projects(){
    return(
        <section id="projects" className="px-6 py-16" md:px-16>
            <h2 className="mb-8 text-3x1 font-bold text-slate-900">projects covered</h2>
            

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                <article className="flex min-w-64 flex-1 flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="text-x1" font-bold text-slate-900>Hospital Management</h3>
                    <p className="mt-2 flex-1 text-slate-700">
                        A hospital appointment booking app built with Django. Patients can book appointments and the booking logic prevents clashes.
                    </p>
                    <div className="mt-4 flex gap-2">
                        <span className="rounded bg-blue-50 px-2 py-1 text-sm text-blue-700">Django</span>
                        <span className="rounded bg-blue-50 px-2 py-1 text-sm text-blue-700">python</span>

                    </div>

                </article>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <article className="flex-min-w-64 flex-1 flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                   <h3 className="text-x1" font-bold text-slate-900>Learning Management System</h3>
                   <p className="mt-2 flex-1 text-slate-700">A learning management enables the users
                    to view the courses, select your best courses and track your proceedings during the course time 
                   </p>

                   <div className="mt-4 flex gap-2">
                        <span className="rounded bg-blue-50 px-2 py-1 text-sm text-blue-700">Django</span>
                        <span className="rounded bg-blue-50 px-2 py-1 text-sm text-blue-700">python</span>
                        
                        <span className="rounded bg-blue-50 px-2 py-1 text-sm text-blue-700">CSS</span>
                        <span className="rounded bg-blue-50 px-2 py-1 text-sm text-blue-700">HTML</span>

                    


                    </div>

                </article>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <article className="flex-min-w-64 flex-1 flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-x1" font-bold text-slate-900>Ecommerce</h3>
                  <p className="mt-2 flex-1 text-slate-700">An ecommerce platform where you view 
                    products and select the product you want to purchase
                  </p>
                  
                  <div className="mt-4 flex gap-2">
                        <span className="rounded bg-blue-50 px-2 py-1 text-sm text-blue-700">HTML</span>
                        <span className="rounded bg-blue-50 px-2 py-1 text-sm text-blue-700">CSS</span>
                        
                        <span className="rounded bg-blue-50 px-2 py-1 text-sm text-blue-700">JS</span>
                        

                    


                    </div>
                  



                </article>
            </div>

        </section>
    )
}
