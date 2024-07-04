import "./App.css";

export default function Home() {
  const dashboardImg="/dashboard.jpg";
  return (
   <div  className="text-sidebar-active">
      <div >
      <p className="text-3xl font-bold text-black flex justify-center items-center">Dashboard Section</p>

    <img src={dashboardImg}  className="h-[70%] w-[100%] rounded-xl object-fill mt-5"/>


      </div>
   </div>
  );
}
