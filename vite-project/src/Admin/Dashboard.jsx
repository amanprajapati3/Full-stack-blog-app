
import SideBar from "./SideBar";
import MyProfile from "./MyProfile";
import CreateBlog from "./CreateBlog";
import MyBlog from "./Myblog";
import { useState } from "react";

const Dashboard = () => {

  const [component, setComponent] = useState("My_blog");
 
  return (
    <div className="mt-10">
      <div className="flex gap-20">
        <div className="">
        <SideBar component={component} setComponent={setComponent}/>
        </div>
        <div className="">
          {
           component === "My_profile" ? (
            <MyProfile/>
           ) : component === "Create_blog" ? (
            <CreateBlog/>
           ) : <MyBlog/>
          }
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
