import React, { Component } from "react";
import NewsItem from "./NewsItem";
export class News extends Component {
  articles = [
    {
      source: {
        id: "wired",
        name: "Wired",
      },
      author: "Julian Chokkattu",
      title: "The Samsung Galaxy Watch4 Is Almost Android's Apple Watch",
      description:
        "The company's new smartwatches breathe new life into Google's Wear OS 3, and a dose of hope for the future.",
      url: "https://www.wired.com/review/samsung-galaxy-watch-4-classic/",
      urlToImage:
        "https://media.wired.com/photos/612914e967168b68f9ececa6/191:100/w_1280,c_limit/Gear-Samsung-Galaxy-Watch4-and-Watch4-Classic-SOURCE-Samsung.jpg",
      publishedAt: "2021-08-28T12:00:00Z",
      content:
        "If you own an Android phone, chances are you've enviously longed for an equivalent to the Apple Watch. A smartwatch with a robust app store, granular fitness and health-tracking features, and a snapp… [+3390 chars]",
    },
    {
      source: {
        id: "wired",
        name: "Wired",
      },
      author: "Gear Team",
      title: "17 Early Labor Day Deals on Laptops, Headlamps, and TVs",
      description:
        "Get ready for fall with the best discounts on everything from home entertainment to fitness tracking.",
      url: "https://www.wired.com/story/early-labor-day-deals-2021/",
      urlToImage:
        "https://media.wired.com/photos/60ec763cfd0513edb15af4f5/191:100/w_1280,c_limit/Gear-LG-C1-OLED.jpg",
      publishedAt: "2021-08-28T11:00:00Z",
      content:
        "It still feels like summer, but football season is about to kick off, and Halloween candy is filling the aisles of big-box stores. The season is changing, folks. Luckily, there are a few great shoppi… [+6210 chars]",
    },
    {
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "Antonio G. Di Benedetto",
      title:
        "Apple’s MagSafe charger and the latest GoPro highlight this weekend’s best deals",
      description:
        "Get a discount on the MagSafe wireless charging puck for your iPhone 12, a MacBook Air, and the biggest sale yet on the GoPro Hero 9 Black. Plus more deals in gaming and on Samsung’s Fan Edition phone.",
      url: "https://www.theverge.com/good-deals/2021/8/28/22644815/apple-magsafe-charger-gopro-hero-9-black-action-cam-m1-macbook-air-xbox-controller-deal-sale",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/J0hqygran7zokWo2GgOaG9DSl5k=/0x66:920x548/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22810136/akrales_201018_4238_0464.0.12.jpg",
      publishedAt: "2021-08-28T13:30:00Z",
      content:
        "You can also save on the M1 MacBook Air and a limited-edition Xbox controller\r\nIf you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.\r\nMagSafe makes for a … [+4876 chars]",
    },
    {
      source: {
        id: null,
        name: "Seths.blog",
      },
      author: "Seth Godin",
      title: "Feature requests for monopolists",
      description:
        "I’d like Gmail to be smart enough to automatically skip the spam folder for any mail that’s coming from someone I just wrote to. I’d like my Apple calendar to know that I never, ever schedule meetings at 3:30 am and to guess that I mean PM. And I’d like it to…",
      url: "https://seths.blog/2021/08/feature-requests-for-monopolists/",
      urlToImage:
        "https://149521506.v2.pressablecdn.com/wp-content/uploads/2018/06/seth_godin_ogimages_v02_1806137-1.jpg",
      publishedAt: "2021-08-28T08:14:00Z",
      content:
        "I’d like Gmail to be smart enough to automatically skip the spam folder for any mail that’s coming from someone I just wrote to.\r\nI’d like my Apple calendar to know that I never, ever schedule meetin… [+951 chars]",
    },
    {
      source: {
        id: null,
        name: "Android Central",
      },
      author: "Kevin Lynch",
      title:
        "How to watch Arsenal vs Man City: Live stream Premier League football onlin",
      description:
        "Beaten in both of their opening two matches of the season, beleaguered Gunners boss Mikel Arteta will be hoping to catch a break as his side take on defending champs Man City on Saturday at the Etihad - read on to find out how to get a Arsenal vs Man City liv…",
      url: "https://www.androidcentral.com/arsenal-vs-man-city-live-stream-how-watch-premier-league-match-online-anywhere-0",
      urlToImage:
        "https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2021/02/arsenal-man-city.jpg",
      publishedAt: "2021-08-28T07:00:02Z",
      content:
        "Beaten in both of their opening two matches of the season, beleaguered Gunners boss Mikel Arteta will be hoping to catch a break as his side take on defending champs Man City on Saturday at the Etiha… [+5209 chars]",
    },
  ];
  constructor() {
    super();
    console.log("hello");
    this.state = {
      articles: this.articles,
    };
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          {/* {this.state.articles.map((element) => (
             return (
              <div className="col-sm-4">
              <NewsItem
                title="this is news 1"
                description="this is news dis."
                imageUrl="https://media.wired.com/photos/612914e967168b68f9ececa6/191:100/w_1280,c_limit/Gear-Samsung-Galaxy-Watch4-and-Watch4-Classic-SOURCE-Samsung.jpg"
              />
            </div>
            )))} */}

          <div className="col-sm-4">
            <NewsItem
              title="this is news 1"
              description="this is news dis."
              imageUrl="https://media.wired.com/photos/612914e967168b68f9ececa6/191:100/w_1280,c_limit/Gear-Samsung-Galaxy-Watch4-and-Watch4-Classic-SOURCE-Samsung.jpg"
            />
          </div>
          {/* <div className="col-sm-4">
                <NewsItem />
              </div>
              <div className="col-sm-4">
                <NewsItem />
              </div>
              <div className="col-sm-4">
                <NewsItem />
              </div> */}
        </div>
      </div>
    );
  }
}

export default News;
