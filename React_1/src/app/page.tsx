import Accordion from "@/app/components/Accordion/Accordion";
import Counter from "@/app/components/Counter/Counter";
import CourseCard from "@/app/components/CourseCard/CourseCard";

const Home = () => {
  return (
    <>
      <section className="row pad-vertical">
        <CourseCard
          imgSrc="https://dst6jalxvbuf5.cloudfront.net/media/images/Course/cover_image/221020_172526/%E1%84%8F%E1%85%A9%E1%84%89%E1%85%B3%E1%84%8F%E1%85%A1%E1%84%83%E1%85%B3_%E1%84%92%E1%85%A1%E1%86%A8%E1%84%89%E1%85%B3%E1%86%B8%E1%84%8B%E1%85%A8%E1%84%8C%E1%85%A5%E1%86%BC_PC.png"
          tags={["커머스", "자기계발", "SNS"]}
          name={"평범한 당신의 인생을 바꾸는 치트키! 월 천+ 버는 퍼스널브랜딩"}
          price={16583}
        />
      </section>

      <Counter />

      <Accordion title="타이틀" content="컨텐츠" />
    </>
  );
};

export default Home;
