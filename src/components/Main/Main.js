import TeamMember from "../Cards/teamMember";
import CategorySection from "../CategorySection/CategorySection";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
export default function Main() {
  return (
    <>

      <div>
      <Hero/>

        {/* <ExerciseCard />
                <ExerciseCard1 />
                <ExerciseCard />
                <ExerciseCard /> */}
        <CategorySection />
        <TeamMember />

        <Contact />
      </div>

    </>
  );
}
