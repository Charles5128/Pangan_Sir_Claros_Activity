import Layout from "@/components/Layout";

const HomePage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[80vh] bg-blue-950 bg-opacity-90 text-white shadow-lg font-serif p-10 rounded-lg">
       <center>
         <h1 className="text-5xl font-extrabold ">Welcome to my Midterm Project</h1>
        <p className="text-lg text-gray-300 mt-4">Charles Ian Pangan</p>
        </center>
      </div>
    </Layout>
  );
};

export default HomePage;
