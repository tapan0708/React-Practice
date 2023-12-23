import Card from './card';
import FunctionalProps from './Functional-props';
import ClassProps from './Class-props';

function CardHolder() {
    let userDetails = {
        userName: "Diva",
        About: "Influencer, London",
        desc: "Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize"
    };

    return (
        <>
            <Card userData={userDetails} btnText="Go Somewhere" cardWidth="18"/>
            <FunctionalProps userName={userDetails.userName}>
                <h2>passing element with props</h2>
            </FunctionalProps>
            <ClassProps userName="Tapan" />
        </>
    );
};

export default CardHolder;