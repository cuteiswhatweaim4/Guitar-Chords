// wtk.js

function loadSong(song) {
    const songContent = document.getElementById('songContent');
    if (song === 'checkYesJuliet') {
        songContent.innerHTML = `
            <h2>Check Yes Juliet</h2>
            <pre>
[Intro]
C G Am F

[Verse 1]
C
Check yes Juliet
G
Are you with me?
Am
Rain is falling down on the sidewalk
F
I won't go until you come outside
C
Check yes Juliet
G
Kill the limbo
Am
I'll keep tossing rocks at your window
F
There's no turning back for us tonight

[Chorus]
C
Lace up your shoes
G
Ayo ayo
Am
Here's how we do

[Chorus]
C
Run baby run
G
Don't ever look back
Am
They'll tear us apart if you give them the chance
F
Don't sell your heart, don't say we're not meant to be
C
Run baby run, forever we'll be
G
You and me

[Verse 2]
C
Check yes Juliet
G
I'll be waiting
Am
Wishing, wanting yours for the taking
F
Just sneak out and don't tell a soul goodbye
C
Check yes Juliet
G
Here's the countdown:
Am
3, 2, 1, now fall in my arms now
F
They can change the locks, don't let them change your mind

[Chorus]
C
Lace up your shoes
G
Ayo ayo
Am
Here's how we do

[Chorus]
C
Run baby run
G
Don't ever look back
Am
They'll tear us apart if you give them the chance
F
Don't sell your heart, don't say we're not meant to be
C
Run baby run, forever we'll be
G
You and me

[Bridge]
C
We're flying through the night
G
We're flying through the night
Am
Way up high
F
The view from here is getting better with you
C
By my side

[Chorus]
C
Run baby run
G
Don't ever look back
Am
They'll tear us apart if you give them the chance
F
Don't sell your heart, don't say we're not meant to be
C
Run baby run, forever will be

[Outro]
C
Run baby run
G
Don't ever look back
Am
They'll tear us apart if you give them the chance
F
Don't sell your heart, don't say we're not meant to be
C
Run baby run, forever will be
G
You and me
C
You and me
G
You and me
            </pre>
        `;
    } else if (song === 'sadSong') {
        songContent.innerHTML = `
            <h2>Sad Song</h2>
            <pre>
[Capo 2]

[Intro]
G D A
G D A

[Verse 1]
D A Bm G
You and I were like fireworks and symphonies exploding in the sky.
D A
With you I'm alive
Bm G
like all the missing pieces of my heart, they finally collide
G A
So stop time right here in the moonlight
Bm C
'cause I don't ever wanna close my eyes

[Chorus]
G D A
Without you, I feel broke like I'm half of a whole
G D A
Without you, I've got no hand to hold
G D A Bm A G
Without you, I feel torn, like a sail in a storm
A G D A
Without you I'm just a sad song
G D A
I'm just a sad song

[Verse 2]
D A Bm G
With you I fall it's like I'm leaving all my past and silhouettes upon the wall
D A
With you I'm a beautiful mess
Bm G
it's like we're standing hand in hand with all our fears upon the edge
G A
So stop time right here in the moonlight
Bm C
'cause I don't ever wanna close my eyes

[Chorus]
G D A
Without you, I feel broke like I'm half of a whole
G D A
Without you, I've got no hand to hold
G D A Bm A G
Without you, I feel torn, like a sail in a storm
A
Without you I'm just a sad song

[Bridge]
F#m G D A
You're the perfect melody, the only harmony I wanna hear
F#m G D
You're my favorite part of me, with you standing next to me I've got nothing
A
to fear

[Chorus]
G D A
Without you, I feel broke like I'm half of a whole
G D A
Without you, I've got no hand to hold
G D F# Bm A G
Without you, I feel torn, like a sail in a storm
A
Without you I'm just a sad song

css
Copy code
    G         D            A  
Without you, I feel broke like I'm half of a whole
G D A
Without you, I've got no hand to hold
G D A Bm A G
Without you, I feel torn, like a sail in a storm
A G D A
Without you I'm just a sad song
G D A
I'm just a sad song
            </pre>
        `;
    }
}

