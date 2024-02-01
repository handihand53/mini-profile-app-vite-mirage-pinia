import { createServer, Response } from 'miragejs'
const user = {

}
let id = 1

export function mockServer() {
  createServer({
    routes() {
      this.get('/api/user', () => {
        return new Response(200, {},  {
          code: 200,
          status: 'OK',
          data: {
            name: 'Richard',
            image: 'https://th.bing.com/th/id/OIG.MxQxUggA0RKmKdTjwAqw',
            title: 'Software developer at <a target="_blank" href="https://www.blibli.com">Blibli.com</a>',
            about: `Hi, my name is <b>Richard</b>, a dynamic individual from Yogyakarta, born in 1990. i'm a passionate anime enthusiast 🍜🦊, known affectionately as a <b>"weeb"</b> among my friends. Anime isn't just a hobby for me; it's a source of inspiration and creativity that shapes my worldview. Alongside my love for anime, also i'm a football 🏈 player, finding joy and adrenaline on the field. Despite my busy schedule, i'm also deeply immersed in the world of programming, where i thrives on challenges and innovation. Now based in Jakarta, my dreams of attending the biggest anime festival in Japan, a goal that reflects my unwavering passion for anime culture and my adventurous spirit.</br></br>In the bustling city of Jakarta, my life is a blend of football matches, coding challenges, and animated adventures. My journey from Yogyakarta to the capital city has been marked by a pursuit of my passions and a relentless drive for self-improvement. While excels in my programming career, my heart still yearns for the vibrant atmosphere of the anime festival in Japan. With each day, i moves closer to fulfilling my dream, embodying the spirit of determination and enthusiasm that defines me as a person.`,
            skills: [
              {
                name: 'Reading',
                score: 5
              },
              {
                name: 'Speaking',
                score: 7
              },
              {
                name: 'Programming',
                score: 9
              },
              {
                name: 'Sleep',
                score: 1
              }
            ],
            hobbies: [
              'Watching anime', 'Football', 'Jogging', 'Sleep'
            ]
          }
        })
      })
    }
  })
}