import Image from "next/image";
import Header from "@/components/Header";
export default function Home() {
  return (
    <div className="h-screen" >
      
 <Header></Header>
 <div className="flex h-[60%]" >
  <div className="w-1/2 flex flex-col  justify-center items-start ">
  <h1 className=" font-bold text-[40px] pt-[316px]">IMPECCABLE CRAFTSMANSHIP AND FINESSE
  </h1>
  <p className="">An example of intricate workmanship and detail, elegant necklaces and long
     and short chains form a part of our desirable collection.</p>
  <button style={{backgroundColor:'#A29875'}} className="text-white rounded-[10px] w-[288px] h-[58px] mt-[50px] ">Explore Now</button>
  </div>
<div className="w-1/2 flex justify-center items-center pt-[316px]">
  <Image
  src={'rs-group-wrap.svg'}
  alt="iamge"
  width={462}
  height={647}
  />
</div>


 </div>
</div>
  );
}