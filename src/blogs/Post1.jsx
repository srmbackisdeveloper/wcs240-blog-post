import { Typography, List, ListItem, ListItemText } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/chess-club-poster.jpg'

export default function Post1() {
  return (
    
    <Box marginTop={2}>
        <Typography gutterBottom={true} variant='h4' component='h1'>Chess Club Poster</Typography>
        <Typography marginBottom={1} fontStyle="italic">August 17, 2023 by <Link to='/'>Myrza Arslan</Link></Typography>
        <img src={image} width='100%' alt='123'/>
        <Typography paragraph={true} marginTop={1} lineHeight={1.5}>
        When it comes to promoting a club or organization, a well-designed poster can work wonders.<br />
        </Typography>
        <Typography paragraph={true} marginTop={1} lineHeight={1.5}>
            In August 17, the Chess Club at Nazarbayev University unveiled its latest promotional masterpiece, a poster that not only captures the essence of the game but also delivers a powerful message. <br />
            In this blog entry, we'll dissect the key elements of the Chess Club poster and explore the significance of its slogan: "CHESS IS EVERYTHING: ART, SCIENCE AND SPORT."<br />
        </Typography>
        
        <List>
                <ListItemText
                    primary="Audience"
                    secondary="The intended audience for this chess club poster is clear—chess enthusiasts within the university community.
                    The strategic placement of the poster in Block 7, a hub for students, ensures it reaches its target audience effectively.
                    By recognizing that chess appeals to both novices and seasoned players,
                    this poster aims to draw in a diverse group of individuals united by their passion for the game."
                />

                <ListItemText
                    primary="Purpose"
                    secondary="This poster has a dual purpose.
                    Firstly, it seeks to recruit new members into the chess club's fold.
                    Secondly, it aims to engage existing members by promoting the club's services, including coaching, tournaments, and social events."
                />

                <ListItemText
                    primary="Context"
                    secondary="
                    The context in which this poster is placed is very strategic.
                    Block 7 is a high-traffic area frequently visited by students.
                    This location aligns perfectly with the university environment, ensuring that the poster catches the eye of its intended audience.
                    The medium, a poster, is selected for its efficiency in conveying information visually in a bustling area.
                    "
                />
        </List>
        
        <List>
            <ListItemText
                primary="Basic design elements"
                secondary="This poster's design is a careful interplay of typography, color, image, and layout.
                Typography is instrumental in delivering the message effectively, with the logotype and slogan employing bold, attention-grabbing fonts.
                The dark black against the white background (and vice versa) creates striking contrast, further enhancing visibility. Also, black-and-white poster makes the thing serious without vivid colors.
                The image featuring chess pieces and the huge white pawn, serves as visual cues, immediately conveying the subject matter.
                The QR Code is just to the point to get fastest access to the club's group.">
            </ListItemText>
            <ListItemText
                    primary="Emphasis"
                    secondary="The use of emphasis in this poster is meticulous.
                    The logotype and slogan are elevated through their larger size and bold red color, making them the centerpiece.
                    The white pawn on the left serves as a visual anchor, directing attention toward the call-to-action elements on the right.
                    This creates a balanced yet captivating composition that skillfully steers the viewer's focus."
            />
        </List>

        <Typography gutterBottom={true} variant='h6' component='h2'>
            Iconography, Form and Semiotics
        </Typography>
        <Typography paragraph={true}>
        In the realm of multimodal rhetoric, the chess club poster serves as a compelling case study in the art of visual communication.
        By incorporating semiotic principles, the poster deftly employs icons, symbols, and indexes to convey its message.
        The logotype's chess piece icons iconically represent the game's essence. To be more precise, the Chess Club's logo contains chess board and a pawn that represents the main idea of the club. the black and white board is the demonstration of the balance and the strategy that could be used during the chess game. It is a very subtle reference that might be ignored but we need to take into account that the connotation of the logo might be quite confused for the beginners and new members. Then, the wreaths can be understand as elitism and loyalty that can deliver us 17-19th centuries history when the chess was available for the 'white bones' (people with high social status). 
        The slogan symbolically elevates chess to the status of an art, science, and sport. There is no any secret as in logo but the slogan makes it fire for those who understand the chess. Of course, chess is more than just a fun game.
        Lastly, mentioning the huge white pawn is mandatory here. This icon will resemble us something related to our past memories, for example, in childhood when our grandpa and dad was playing chess. These memories build the closer relationship to this icon so we can be interested in it and take a part in this club. 
        Also, icon is perfectly placed and sized to get paid attention.
        </Typography>

        <Link to='/'>Back</Link>

    </Box>
  )
}
