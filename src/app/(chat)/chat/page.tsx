import MainContent from "./[chatid]/page";

const page = () => {
  return (
    <div>
      <MainContent
        params={{
          chatid: "",
        }}
      />
    </div>
  );
};

export default page;
