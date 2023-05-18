import Section from "./Section";
import Heading from "./Heading";
import NewSuperDiv from "./NewSuperDiv";

export default function ContextMain() {

    return (
        <>
            <NewSuperDiv/>
            <Section>

                <Heading>Title</Heading>
                <Section>
                    <Heading>Heading</Heading>
                    <Heading>Heading</Heading>
                    <Heading>Heading</Heading>
                    <Section>
                        <Heading>Sub-heading</Heading>
                        <Heading>Sub-heading</Heading>
                        <Heading>Sub-heading</Heading>
                        <Section>
                            <Heading>Sub-sub-heading</Heading>
                            <Heading>Sub-sub-heading</Heading>
                            <Heading>Sub-sub-heading</Heading>

                        </Section>
                    </Section>
                </Section>
            </Section>
        </>
    )
}