import { Typography, List, ListItem, ListItemText } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
export default function Post1() {
  return (
    
    <Box marginTop={2}>
        <Typography gutterBottom={true} variant='h4' component='h1'>Irina Kairatovna - 5000 [Music Video]</Typography>
        <Typography marginBottom={1} fontStyle="italic">Dec 29, 2020 by <Link to='/'>"ГОСТ ENTERTAINMENT"</Link></Typography>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/Jk7Ff9s2nkw?si=Np2eaupGDImzXjCu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        <Typography gutterBottom={true} variant='h6' component='h2' marginTop={1}>
            Introduction
        </Typography>
        <Typography paragraph={true}>
            Music videos are a unique medium for artistic expression, combining audio and visual elements to convey profound messages. In this blog post, we delve into a thought-provoking music video that harnesses the power of iconography, form, and semiotics to craft a narrative rich in symbolism. We will also explore the video's audience, purpose, context, basic design elements, emphasis, and proximity, unraveling the layers of meaning it seeks to communicate.
        </Typography>


        <Typography paragraph={true} >
            “The best people are the ones that understand content.
            They're a pain in the butt to manage, but you put up with
            it because they are so good.”

            —Steve Jobs
            [5]
        </Typography>

        <Typography gutterBottom={true} variant='h6' component='h2'>
            Review
        </Typography>
        <Typography paragraph={true}>
            The first frame of the clip opens to us a scene where there is a kerosene lamp in the center of the room, which perhaps refers to hope, which was like a light in the dark
            The hero of the first actor (Azamat) holding the lamp is none other than Alikhan Bokeikhanov, a prominent public and statesman, organizer and leader of the national Democratic Party Alash, head of the first Kazakh national government Alash Orda. Scientist, talented publicist, Alikhan Bokeikhan devoted his whole life to the struggle for freedom and political independence of the Kazakh people
            But, in the next frame, we see how he is beaten by NKVD officers (we can see from the badge in his sleeve). 
            Then, on the wall we already see not the first traces of shots, this refers us to the fact that Alikhan Bukeikhanov was not the first who was shot on this wall.
            Since 1927, according to paragraph 57 of the Criminal Code of the USSR, this treason was an armed uprising and anti-Soviet propaganda. More than 100,000 people were detained in Kazakhstan, 25,000 of them were shot. 
            What follows is a shot of how modern deputies do not like to recall the events of those times, and show how they simply close Alikhan's corpse with a grin. in
            The next frame opens to us the scene of a group of dead Kazakhs who gave their lives from the Kazakh Khanate to the current generation. But, the latter sit in tablets and watch humorous videos from tiktok with photos of public figures. In the frame you can still see the flag of the Alash Horde.
            But the most interesting thing is happening in the background, where portraits of Alashordins whose eyes are closed with the logo of the popular designer Sabit Sarkhan known as Bisen. 

            Further on, the clip shows the tin of our times, which has been going on since the USSR.
        </Typography>

        <Typography gutterBottom={true} variant='h6' component='h2'>
            Iconography, Form and Semiotics
        </Typography>
        <Typography paragraph={true}>
            In 1:20 time frame of the video the logotype made by Bisen is shown as the main idea of the music video. This icon is hard to understand for the people who has not hear about this logotype.
            The red color in logotype is used to show the blood, cruel attitude done against Kazakhs when Kazakhstan was under colony of Russian Empire. Also the form (denotation) of the logotype being as a signifier that demonstrates us eyes. Bloody eyes. The eyes that shows all the suffer Kazakhs used to survive.
        
            <Typography fontWeight={600} color={"red"}>It should definitely be mentioned that Bisen was killed because of a provocation that the government did not like.</Typography>
        </Typography>
        
        <List>
                <ListItemText
                    primary="Audience"
                    secondary="The intended audience for this music video is multifaceted. Firstly, it speaks to those who appreciate artistic expressions and symbolism in music videos. Additionally, it targets individuals interested in Kazakhstan's history, particularly the struggle for independence. This includes not only Kazakh audiences but also those with an interest in global historical and sociopolitical contexts.
                    "
                />

                <ListItemText
                    primary="Purpose"
                    secondary="The video serves a dual purpose. Firstly, it aims to pay homage to Kazakhstan's historical figures, particularly Alikhan Bokeikhanov, by shedding light on their sacrifices in the pursuit of independence. Secondly, it acts as a poignant critique of contemporary society's detachment from its own history and values.                    "
                />

                <ListItemText
                    primary="Context"
                    secondary="
                    The video opens with a kerosene lamp, symbolizing hope in the darkness. This context highlights the historical backdrop of Kazakhstan's fight for independence and sets the stage for the narrative. The subsequent scenes featuring Alikhan Bokeikhanov and NKVD officers firmly root the video in the early 20th century, during a tumultuous period in Kazakhstan's history. It then transitions to modern times, juxtaposing historical events with the present to draw parallels and contrasts.                    "
                />
        </List>
        
        <List>
            <ListItemText
                primary="Basic design elements"
                secondary="The video employs a deliberate use of color, lighting, and visual composition to convey its message. The initial frame with the kerosene lamp uses dim lighting to create a somber, reflective mood. The transition to historical scenes utilizes sepia tones and vintage aesthetics to transport the viewer to the past. In contrast, the scenes featuring modern deputies and contemporary society employ brighter, modern visuals, highlighting the stark difference between then and now. This deliberate play with design elements enhances the video's storytelling.                ">
            </ListItemText>
            <ListItemText
                    primary="Emphasis"
                    secondary="The video strategically places emphasis on key symbols and moments. Alikhan Bokeikhanov, as the central historical figure, is highlighted as he holds the kerosene lamp, symbolizing hope. The scenes of violence against him emphasize the brutal reality faced by those who opposed the authorities. The juxtaposition of modern deputies with the covered corpse of Alikhan accentuates their indifference to history. The closed eyes of Alashordins hidden beneath the logo of Sabit Sarkhan (Bisen) demand attention, symbolizing the collective historical amnesia.
                    "
            />
        </List>

        <Typography gutterBottom={true} variant='h6' component='h2'>
            Conclusion
        </Typography>
        <Typography paragraph={true}>
            In conclusion, this music video is a masterful blend of artistic expression and historical commentary. Through meticulous use of iconography, form, and semiotics, it weaves a narrative that pays tribute to the past while challenging the present. The audience is drawn into a reflective journey, and the video's purpose is achieved through thought-provoking juxtapositions and design elements. It serves as a reminder that art, when combined with deep symbolism, can be a powerful medium for conveying complex messages about history and society.
        </Typography>


        <Typography paragraph={true}></Typography>

        <Link to='/'>Back</Link>

    </Box>
  )
}
