import Title from './Title';
import { tours } from '../data';
import Tour from './Tour';

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title blackTxt="Featured" tealTxt="Tours" />
      <div className="section-center featured-center">
        {tours.map((tours) => {
          return <Tour key={tours.id} {...tours} />;
        })}
      </div>
    </section>
  );
};
export default Tours;
