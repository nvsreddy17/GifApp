import "./styles.css";
import React from "react";
import Search from "./Components/Search";
import Display from "./Components/Display";
import { getAPI } from "./ServiceAPI";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      gifs: [
        {
          type: "gif",
          id: "3MCvLEWsO2gXgL55H9",
          url: "https://giphy.com/gifs/studiosoriginals-3MCvLEWsO2gXgL55H9",
          slug: "studiosoriginals-3MCvLEWsO2gXgL55H9",
          bitly_gif_url: "https://gph.is/g/ZxknkRO",
          bitly_url: "https://gph.is/g/ZxknkRO",
          embed_url: "https://giphy.com/embed/3MCvLEWsO2gXgL55H9",
          username: "studiosoriginals",
          source: "",
          title: "Sleepy Good Night GIF by GIPHY Studios Originals",
          rating: "g",
          content_url: "",
          source_tld: "",
          source_post_url: "",
          is_sticker: 0,
          import_datetime: "2021-09-02 18:03:33",
          trending_datetime: "2021-10-12 04:18:05",
          images: {
            original: {
              height: "360",
              width: "480",
              size: "7417279",
              url:
                "https://media3.giphy.com/media/3MCvLEWsO2gXgL55H9/giphy.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=giphy.gif&ct=g",
              mp4_size: "594282",
              mp4:
                "https://media3.giphy.com/media/3MCvLEWsO2gXgL55H9/giphy.mp4?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=giphy.mp4&ct=g",
              webp_size: "2079800",
              webp:
                "https://media3.giphy.com/media/3MCvLEWsO2gXgL55H9/giphy.webp?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=giphy.webp&ct=g",
              frames: "215",
              hash: "d2be0c18f1e3a5f59ca3bad62a481fac"
            },
            downsized: {
              height: "360",
              width: "480",
              size: "1419920",
              url:
                "https://media3.giphy.com/media/3MCvLEWsO2gXgL55H9/giphy-downsized.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=giphy-downsized.gif&ct=g"
            },
            downsized_large: {
              height: "360",
              width: "480",
              size: "5903095",
              url:
                "https://media3.giphy.com/media/3MCvLEWsO2gXgL55H9/giphy-downsized-large.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=giphy-downsized-large.gif&ct=g"
            },
            downsized_medium: {
              height: "360",
              width: "480",
              size: "2059181",
              url:
                "https://media3.giphy.com/media/3MCvLEWsO2gXgL55H9/giphy-downsized-medium.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=giphy-downsized-medium.gif&ct=g"
            },
            downsized_small: {
              height: "176",
              width: "234",
              mp4_size: "106981",
              mp4:
                "https://media3.giphy.com/media/3MCvLEWsO2gXgL55H9/giphy-downsized-small.mp4?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=giphy-downsized-small.mp4&ct=g"
            },
            downsized_still: {
              height: "360",
              width: "480",
              size: "35948",
              url:
                "https://media3.giphy.com/media/3MCvLEWsO2gXgL55H9/giphy-downsized_s.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=giphy-downsized_s.gif&ct=g"
            },
            fixed_height: {
              height: "200",
              width: "267",
              size: "2332236",
              url:
                "https://media3.giphy.com/media/3MCvLEWsO2gXgL55H9/200.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=200.gif&ct=g",
              mp4_size: "240785",
              mp4:
                "https://media3.giphy.com/media/3MCvLEWsO2gXgL55H9/200.mp4?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=200.mp4&ct=g",
              webp_size: "834078",
              webp:
                "https://media3.giphy.com/media/3MCvLEWsO2gXgL55H9/200.webp?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=200.webp&ct=g"
            },
            fixed_height_downsampled: {
              height: "200",
              width: "267",
              size: "100804",
              url:
                "https://media3.giphy.com/media/3MCvLEWsO2gXgL55H9/200_d.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=200_d.gif&ct=g",
              webp_size: "62882",
              webp:
                "https://media3.giphy.com/media/3MCvLEWsO2gXgL55H9/200_d.webp?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=200_d.webp&ct=g"
            },
            fixed_height_small: {
              height: "100",
              width: "134",
              size: "846552",
              url:
                "https://media3.giphy.com/media/3MCvLEWsO2gXgL55H9/100.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=100.gif&ct=g",
              mp4_size: "92373",
              mp4:
                "https://media3.giphy.com/media/3MCvLEWsO2gXgL55H9/100.mp4?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=100.mp4&ct=g",
              webp_size: "297310",
              webp:
                "https://media3.giphy.com/media/3MCvLEWsO2gXgL55H9/100.webp?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=100.webp&ct=g"
            },
            fixed_height_small_still: {
              height: "100",
              width: "134",
              size: "5572",
              url:
                "https://media3.giphy.com/media/3MCvLEWsO2gXgL55H9/100_s.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=100_s.gif&ct=g"
            },
            fixed_height_still: {
              height: "200",
              width: "267",
              size: "13674",
              url:
                "https://media3.giphy.com/media/3MCvLEWsO2gXgL55H9/200_s.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=200_s.gif&ct=g"
            },
            fixed_width: {
              height: "150",
              width: "200",
              size: "1324342",
              url:
                "https://media3.giphy.com/media/3MCvLEWsO2gXgL55H9/200w.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=200w.gif&ct=g",
              mp4_size: "160117",
              mp4:
                "https://media3.giphy.com/media/3MCvLEWsO2gXgL55H9/200w.mp4?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=200w.mp4&ct=g",
              webp_size: "521940",
              webp:
                "https://media3.giphy.com/media/3MCvLEWsO2gXgL55H9/200w.webp?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=200w.webp&ct=g"
            },
            fixed_width_downsampled: {
              height: "150",
              width: "200",
              size: "68879",
              url:
                "https://media3.giphy.com/media/3MCvLEWsO2gXgL55H9/200w_d.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=200w_d.gif&ct=g",
              webp_size: "41804",
              webp:
                "https://media3.giphy.com/media/3MCvLEWsO2gXgL55H9/200w_d.webp?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=200w_d.webp&ct=g"
            },
            fixed_width_small: {
              height: "75",
              width: "100",
              size: "500498",
              url:
                "https://media3.giphy.com/media/3MCvLEWsO2gXgL55H9/100w.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=100w.gif&ct=g",
              mp4_size: "48461",
              mp4:
                "https://media3.giphy.com/media/3MCvLEWsO2gXgL55H9/100w.mp4?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=100w.mp4&ct=g",
              webp_size: "206082",
              webp:
                "https://media3.giphy.com/media/3MCvLEWsO2gXgL55H9/100w.webp?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=100w.webp&ct=g"
            },
            fixed_width_small_still: {
              height: "75",
              width: "100",
              size: "3926",
              url:
                "https://media3.giphy.com/media/3MCvLEWsO2gXgL55H9/100w_s.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=100w_s.gif&ct=g"
            },
            fixed_width_still: {
              height: "150",
              width: "200",
              size: "11321",
              url:
                "https://media3.giphy.com/media/3MCvLEWsO2gXgL55H9/200w_s.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=200w_s.gif&ct=g"
            },
            looping: {
              mp4_size: "1712238",
              mp4:
                "https://media3.giphy.com/media/3MCvLEWsO2gXgL55H9/giphy-loop.mp4?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=giphy-loop.mp4&ct=g"
            },
            original_still: {
              height: "360",
              width: "480",
              size: "58073",
              url:
                "https://media3.giphy.com/media/3MCvLEWsO2gXgL55H9/giphy_s.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=giphy_s.gif&ct=g"
            },
            original_mp4: {
              height: "360",
              width: "480",
              mp4_size: "594282",
              mp4:
                "https://media3.giphy.com/media/3MCvLEWsO2gXgL55H9/giphy.mp4?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=giphy.mp4&ct=g"
            },
            preview: {
              height: "264",
              width: "352",
              mp4_size: "29750",
              mp4:
                "https://media3.giphy.com/media/3MCvLEWsO2gXgL55H9/giphy-preview.mp4?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=giphy-preview.mp4&ct=g"
            },
            preview_gif: {
              height: "80",
              width: "107",
              size: "48035",
              url:
                "https://media3.giphy.com/media/3MCvLEWsO2gXgL55H9/giphy-preview.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=giphy-preview.gif&ct=g"
            },
            preview_webp: {
              height: "134",
              width: "178",
              size: "40278",
              url:
                "https://media3.giphy.com/media/3MCvLEWsO2gXgL55H9/giphy-preview.webp?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=giphy-preview.webp&ct=g"
            },
            hd: {
              height: "810",
              width: "1080",
              mp4_size: "2714205",
              mp4:
                "https://media3.giphy.com/media/3MCvLEWsO2gXgL55H9/giphy-hd.mp4?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=giphy-hd.mp4&ct=g"
            },
            "480w_still": {
              height: "360",
              width: "480",
              size: "7417279",
              url:
                "https://media3.giphy.com/media/3MCvLEWsO2gXgL55H9/480w_s.jpg?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=480w_s.jpg&ct=g"
            }
          },
          user: {
            avatar_url:
              "https://media4.giphy.com/avatars/studiosoriginals/YkMcrX3ELQ7C.gif",
            banner_image:
              "https://media4.giphy.com/headers/studiosoriginals/qlAO7tupLPrq.png",
            banner_url:
              "https://media4.giphy.com/headers/studiosoriginals/qlAO7tupLPrq.png",
            profile_url: "https://giphy.com/studiosoriginals/",
            username: "studiosoriginals",
            display_name: "GIPHY Studios Originals",
            description: "",
            instagram_url: "",
            website_url: "https://giphy.com/studios",
            is_verified: true
          },
          analytics_response_payload:
            "e=Z2lmX2lkPTNNQ3ZMRVdzTzJnWGdMNTVIOSZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9OWYwZjY0MjVnbzBmZDgwOTFrbzJuY3Flam5kMjd0dDlnYmUzMGYydjRnNjFjZTVjJmN0PWc",
          analytics: {
            onload: {
              url:
                "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNNQ3ZMRVdzTzJnWGdMNTVIOSZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9OWYwZjY0MjVnbzBmZDgwOTFrbzJuY3Flam5kMjd0dDlnYmUzMGYydjRnNjFjZTVjJmN0PWc&action_type=SEEN"
            },
            onclick: {
              url:
                "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNNQ3ZMRVdzTzJnWGdMNTVIOSZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9OWYwZjY0MjVnbzBmZDgwOTFrbzJuY3Flam5kMjd0dDlnYmUzMGYydjRnNjFjZTVjJmN0PWc&action_type=CLICK"
            },
            onsent: {
              url:
                "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTNNQ3ZMRVdzTzJnWGdMNTVIOSZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9OWYwZjY0MjVnbzBmZDgwOTFrbzJuY3Flam5kMjd0dDlnYmUzMGYydjRnNjFjZTVjJmN0PWc&action_type=SENT"
            }
          }
        },
        {
          type: "gif",
          id: "dZ8nmFzPpqAb2RGYYC",
          url: "https://giphy.com/gifs/dZ8nmFzPpqAb2RGYYC",
          slug: "dZ8nmFzPpqAb2RGYYC",
          bitly_gif_url: "https://gph.is/g/Zl169DM",
          bitly_url: "https://gph.is/g/Zl169DM",
          embed_url: "https://giphy.com/embed/dZ8nmFzPpqAb2RGYYC",
          username: "albaparis",
          source: "http://pigleaf.co",
          title: "Happy Birthday Dancing GIF by Alba Paris",
          rating: "g",
          content_url: "",
          source_tld: "pigleaf.co",
          source_post_url: "http://pigleaf.co",
          is_sticker: 0,
          import_datetime: "2020-09-04 02:44:53",
          trending_datetime: "2020-12-17 15:45:09",
          images: {
            original: {
              height: "600",
              width: "600",
              size: "962398",
              url:
                "https://media1.giphy.com/media/dZ8nmFzPpqAb2RGYYC/giphy.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=giphy.gif&ct=g",
              mp4_size: "506971",
              mp4:
                "https://media1.giphy.com/media/dZ8nmFzPpqAb2RGYYC/giphy.mp4?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=giphy.mp4&ct=g",
              webp_size: "696720",
              webp:
                "https://media1.giphy.com/media/dZ8nmFzPpqAb2RGYYC/giphy.webp?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=giphy.webp&ct=g",
              frames: "36",
              hash: "103e5ce64509055d91a503960b5b0d30"
            },
            downsized: {
              height: "600",
              width: "600",
              size: "962398",
              url:
                "https://media1.giphy.com/media/dZ8nmFzPpqAb2RGYYC/giphy.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=giphy.gif&ct=g"
            },
            downsized_large: {
              height: "600",
              width: "600",
              size: "962398",
              url:
                "https://media1.giphy.com/media/dZ8nmFzPpqAb2RGYYC/giphy.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=giphy.gif&ct=g"
            },
            downsized_medium: {
              height: "600",
              width: "600",
              size: "962398",
              url:
                "https://media1.giphy.com/media/dZ8nmFzPpqAb2RGYYC/giphy.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=giphy.gif&ct=g"
            },
            downsized_small: {
              height: "330",
              width: "330",
              mp4_size: "185698",
              mp4:
                "https://media1.giphy.com/media/dZ8nmFzPpqAb2RGYYC/giphy-downsized-small.mp4?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=giphy-downsized-small.mp4&ct=g"
            },
            downsized_still: {
              height: "600",
              width: "600",
              size: "962398",
              url:
                "https://media1.giphy.com/media/dZ8nmFzPpqAb2RGYYC/giphy_s.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=giphy_s.gif&ct=g"
            },
            fixed_height: {
              height: "200",
              width: "200",
              size: "224938",
              url:
                "https://media1.giphy.com/media/dZ8nmFzPpqAb2RGYYC/200.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=200.gif&ct=g",
              mp4_size: "185094",
              mp4:
                "https://media1.giphy.com/media/dZ8nmFzPpqAb2RGYYC/200.mp4?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=200.mp4&ct=g",
              webp_size: "216326",
              webp:
                "https://media1.giphy.com/media/dZ8nmFzPpqAb2RGYYC/200.webp?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=200.webp&ct=g"
            },
            fixed_height_downsampled: {
              height: "200",
              width: "200",
              size: "39148",
              url:
                "https://media1.giphy.com/media/dZ8nmFzPpqAb2RGYYC/200_d.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=200_d.gif&ct=g",
              webp_size: "36532",
              webp:
                "https://media1.giphy.com/media/dZ8nmFzPpqAb2RGYYC/200_d.webp?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=200_d.webp&ct=g"
            },
            fixed_height_small: {
              height: "100",
              width: "100",
              size: "96748",
              url:
                "https://media1.giphy.com/media/dZ8nmFzPpqAb2RGYYC/100.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=100.gif&ct=g",
              mp4_size: "76655",
              mp4:
                "https://media1.giphy.com/media/dZ8nmFzPpqAb2RGYYC/100.mp4?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=100.mp4&ct=g",
              webp_size: "91476",
              webp:
                "https://media1.giphy.com/media/dZ8nmFzPpqAb2RGYYC/100.webp?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=100.webp&ct=g"
            },
            fixed_height_small_still: {
              height: "100",
              width: "100",
              size: "3422",
              url:
                "https://media1.giphy.com/media/dZ8nmFzPpqAb2RGYYC/100_s.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=100_s.gif&ct=g"
            },
            fixed_height_still: {
              height: "200",
              width: "200",
              size: "7300",
              url:
                "https://media1.giphy.com/media/dZ8nmFzPpqAb2RGYYC/200_s.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=200_s.gif&ct=g"
            },
            fixed_width: {
              height: "200",
              width: "200",
              size: "224938",
              url:
                "https://media1.giphy.com/media/dZ8nmFzPpqAb2RGYYC/200w.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=200w.gif&ct=g",
              mp4_size: "185094",
              mp4:
                "https://media1.giphy.com/media/dZ8nmFzPpqAb2RGYYC/200w.mp4?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=200w.mp4&ct=g",
              webp_size: "216326",
              webp:
                "https://media1.giphy.com/media/dZ8nmFzPpqAb2RGYYC/200w.webp?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=200w.webp&ct=g"
            },
            fixed_width_downsampled: {
              height: "200",
              width: "200",
              size: "39148",
              url:
                "https://media1.giphy.com/media/dZ8nmFzPpqAb2RGYYC/200w_d.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=200w_d.gif&ct=g",
              webp_size: "36532",
              webp:
                "https://media1.giphy.com/media/dZ8nmFzPpqAb2RGYYC/200w_d.webp?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=200w_d.webp&ct=g"
            },
            fixed_width_small: {
              height: "100",
              width: "100",
              size: "96748",
              url:
                "https://media1.giphy.com/media/dZ8nmFzPpqAb2RGYYC/100w.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=100w.gif&ct=g",
              mp4_size: "46877",
              mp4:
                "https://media1.giphy.com/media/dZ8nmFzPpqAb2RGYYC/100w.mp4?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=100w.mp4&ct=g",
              webp_size: "91476",
              webp:
                "https://media1.giphy.com/media/dZ8nmFzPpqAb2RGYYC/100w.webp?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=100w.webp&ct=g"
            },
            fixed_width_small_still: {
              height: "100",
              width: "100",
              size: "3422",
              url:
                "https://media1.giphy.com/media/dZ8nmFzPpqAb2RGYYC/100w_s.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=100w_s.gif&ct=g"
            },
            fixed_width_still: {
              height: "200",
              width: "200",
              size: "7300",
              url:
                "https://media1.giphy.com/media/dZ8nmFzPpqAb2RGYYC/200w_s.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=200w_s.gif&ct=g"
            },
            looping: {
              mp4_size: "1599542",
              mp4:
                "https://media1.giphy.com/media/dZ8nmFzPpqAb2RGYYC/giphy-loop.mp4?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=giphy-loop.mp4&ct=g"
            },
            original_still: {
              height: "600",
              width: "600",
              size: "34042",
              url:
                "https://media1.giphy.com/media/dZ8nmFzPpqAb2RGYYC/giphy_s.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=giphy_s.gif&ct=g"
            },
            original_mp4: {
              height: "480",
              width: "480",
              mp4_size: "506971",
              mp4:
                "https://media1.giphy.com/media/dZ8nmFzPpqAb2RGYYC/giphy.mp4?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=giphy.mp4&ct=g"
            },
            preview: {
              height: "314",
              width: "314",
              mp4_size: "49339",
              mp4:
                "https://media1.giphy.com/media/dZ8nmFzPpqAb2RGYYC/giphy-preview.mp4?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=giphy-preview.mp4&ct=g"
            },
            preview_gif: {
              height: "135",
              width: "135",
              size: "48299",
              url:
                "https://media1.giphy.com/media/dZ8nmFzPpqAb2RGYYC/giphy-preview.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=giphy-preview.gif&ct=g"
            },
            preview_webp: {
              height: "234",
              width: "234",
              size: "48868",
              url:
                "https://media1.giphy.com/media/dZ8nmFzPpqAb2RGYYC/giphy-preview.webp?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=giphy-preview.webp&ct=g"
            },
            "480w_still": {
              height: "480",
              width: "480",
              size: "962398",
              url:
                "https://media1.giphy.com/media/dZ8nmFzPpqAb2RGYYC/480w_s.jpg?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=480w_s.jpg&ct=g"
            }
          },
          user: {
            avatar_url:
              "https://media3.giphy.com/avatars/albaparis/F9QzWGlIoLol.gif",
            banner_image:
              "https://media3.giphy.com/headers/albaparis/erBHuOLqN6Q3.gif",
            banner_url:
              "https://media3.giphy.com/headers/albaparis/erBHuOLqN6Q3.gif",
            profile_url: "https://giphy.com/albaparis/",
            username: "albaparis",
            display_name: "Alba Paris",
            description:
              "• Animator, illustrator +  gif creator ! \r\n\r\nLet's tell the story of your new product , brand, brand collaboration  or company using gif animations and stickers on your social media sites. Let's work together!\r\ninfo@albaparis.com\r\n\r\n• Clients: \r\n     GIPHY\r\n     Flora Plant Butter US\r\n     Support + Feed\r\n     Vevolution\r\n     Whatthepitta\r\n     VivaLaVegan\r\n     Picky Wops",
            instagram_url: "https://instagram.com/albaparis",
            website_url: "https://AlbaParis.com",
            is_verified: true
          },
          analytics_response_payload:
            "e=Z2lmX2lkPWRaOG5tRnpQcHFBYjJSR1lZQyZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9OWYwZjY0MjVnbzBmZDgwOTFrbzJuY3Flam5kMjd0dDlnYmUzMGYydjRnNjFjZTVjJmN0PWc",
          analytics: {
            onload: {
              url:
                "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWRaOG5tRnpQcHFBYjJSR1lZQyZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9OWYwZjY0MjVnbzBmZDgwOTFrbzJuY3Flam5kMjd0dDlnYmUzMGYydjRnNjFjZTVjJmN0PWc&action_type=SEEN"
            },
            onclick: {
              url:
                "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWRaOG5tRnpQcHFBYjJSR1lZQyZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9OWYwZjY0MjVnbzBmZDgwOTFrbzJuY3Flam5kMjd0dDlnYmUzMGYydjRnNjFjZTVjJmN0PWc&action_type=CLICK"
            },
            onsent: {
              url:
                "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWRaOG5tRnpQcHFBYjJSR1lZQyZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9OWYwZjY0MjVnbzBmZDgwOTFrbzJuY3Flam5kMjd0dDlnYmUzMGYydjRnNjFjZTVjJmN0PWc&action_type=SENT"
            }
          }
        },
        {
          type: "gif",
          id: "Lt2scvkIVNVPEweFKW",
          url:
            "https://giphy.com/gifs/mlb-sports-boston-red-sox-Lt2scvkIVNVPEweFKW",
          slug: "mlb-sports-boston-red-sox-Lt2scvkIVNVPEweFKW",
          bitly_gif_url: "https://gph.is/g/aNbAk3P",
          bitly_url: "https://gph.is/g/aNbAk3P",
          embed_url: "https://giphy.com/embed/Lt2scvkIVNVPEweFKW",
          username: "mlb",
          source: "",
          title: "Major League Baseball Sport GIF by MLB",
          rating: "g",
          content_url: "",
          source_tld: "",
          source_post_url: "",
          is_sticker: 0,
          import_datetime: "2021-10-06 03:58:16",
          trending_datetime: "2021-10-12 03:29:42",
          images: {
            original: {
              height: "270",
              width: "480",
              size: "4573178",
              url:
                "https://media0.giphy.com/media/Lt2scvkIVNVPEweFKW/giphy.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=giphy.gif&ct=g",
              mp4_size: "1088791",
              mp4:
                "https://media0.giphy.com/media/Lt2scvkIVNVPEweFKW/giphy.mp4?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=giphy.mp4&ct=g",
              webp_size: "1699902",
              webp:
                "https://media0.giphy.com/media/Lt2scvkIVNVPEweFKW/giphy.webp?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=giphy.webp&ct=g",
              frames: "75",
              hash: "4b5d8ae1f4d6de60e2228cf4b7035a51"
            },
            downsized: {
              height: "216",
              width: "384",
              size: "1594785",
              url:
                "https://media0.giphy.com/media/Lt2scvkIVNVPEweFKW/giphy-downsized.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=giphy-downsized.gif&ct=g"
            },
            downsized_large: {
              height: "270",
              width: "480",
              size: "4573178",
              url:
                "https://media0.giphy.com/media/Lt2scvkIVNVPEweFKW/giphy.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=giphy.gif&ct=g"
            },
            downsized_medium: {
              height: "270",
              width: "480",
              size: "3127150",
              url:
                "https://media0.giphy.com/media/Lt2scvkIVNVPEweFKW/giphy-downsized-medium.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=giphy-downsized-medium.gif&ct=g"
            },
            downsized_small: {
              height: "110",
              width: "195",
              mp4_size: "129527",
              mp4:
                "https://media0.giphy.com/media/Lt2scvkIVNVPEweFKW/giphy-downsized-small.mp4?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=giphy-downsized-small.mp4&ct=g"
            },
            downsized_still: {
              height: "216",
              width: "384",
              size: "34068",
              url:
                "https://media0.giphy.com/media/Lt2scvkIVNVPEweFKW/giphy-downsized_s.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=giphy-downsized_s.gif&ct=g"
            },
            fixed_height: {
              height: "200",
              width: "356",
              size: "1980827",
              url:
                "https://media0.giphy.com/media/Lt2scvkIVNVPEweFKW/200.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=200.gif&ct=g",
              mp4_size: "636559",
              mp4:
                "https://media0.giphy.com/media/Lt2scvkIVNVPEweFKW/200.mp4?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=200.mp4&ct=g",
              webp_size: "1062220",
              webp:
                "https://media0.giphy.com/media/Lt2scvkIVNVPEweFKW/200.webp?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=200.webp&ct=g"
            },
            fixed_height_downsampled: {
              height: "200",
              width: "356",
              size: "172699",
              url:
                "https://media0.giphy.com/media/Lt2scvkIVNVPEweFKW/200_d.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=200_d.gif&ct=g",
              webp_size: "115650",
              webp:
                "https://media0.giphy.com/media/Lt2scvkIVNVPEweFKW/200_d.webp?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=200_d.webp&ct=g"
            },
            fixed_height_small: {
              height: "100",
              width: "178",
              size: "652230",
              url:
                "https://media0.giphy.com/media/Lt2scvkIVNVPEweFKW/100.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=100.gif&ct=g",
              mp4_size: "204695",
              mp4:
                "https://media0.giphy.com/media/Lt2scvkIVNVPEweFKW/100.mp4?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=100.mp4&ct=g",
              webp_size: "364922",
              webp:
                "https://media0.giphy.com/media/Lt2scvkIVNVPEweFKW/100.webp?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=100.webp&ct=g"
            },
            fixed_height_small_still: {
              height: "100",
              width: "178",
              size: "10636",
              url:
                "https://media0.giphy.com/media/Lt2scvkIVNVPEweFKW/100_s.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=100_s.gif&ct=g"
            },
            fixed_height_still: {
              height: "200",
              width: "356",
              size: "31964",
              url:
                "https://media0.giphy.com/media/Lt2scvkIVNVPEweFKW/200_s.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=200_s.gif&ct=g"
            },
            fixed_width: {
              height: "113",
              width: "200",
              size: "914673",
              url:
                "https://media0.giphy.com/media/Lt2scvkIVNVPEweFKW/200w.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=200w.gif&ct=g",
              mp4_size: "238420",
              mp4:
                "https://media0.giphy.com/media/Lt2scvkIVNVPEweFKW/200w.mp4?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=200w.mp4&ct=g",
              webp_size: "423970",
              webp:
                "https://media0.giphy.com/media/Lt2scvkIVNVPEweFKW/200w.webp?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=200w.webp&ct=g"
            },
            fixed_width_downsampled: {
              height: "113",
              width: "200",
              size: "73671",
              url:
                "https://media0.giphy.com/media/Lt2scvkIVNVPEweFKW/200w_d.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=200w_d.gif&ct=g",
              webp_size: "42332",
              webp:
                "https://media0.giphy.com/media/Lt2scvkIVNVPEweFKW/200w_d.webp?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=200w_d.webp&ct=g"
            },
            fixed_width_small: {
              height: "57",
              width: "100",
              size: "247084",
              url:
                "https://media0.giphy.com/media/Lt2scvkIVNVPEweFKW/100w.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=100w.gif&ct=g",
              mp4_size: "48295",
              mp4:
                "https://media0.giphy.com/media/Lt2scvkIVNVPEweFKW/100w.mp4?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=100w.mp4&ct=g",
              webp_size: "148968",
              webp:
                "https://media0.giphy.com/media/Lt2scvkIVNVPEweFKW/100w.webp?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=100w.webp&ct=g"
            },
            fixed_width_small_still: {
              height: "57",
              width: "100",
              size: "4194",
              url:
                "https://media0.giphy.com/media/Lt2scvkIVNVPEweFKW/100w_s.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=100w_s.gif&ct=g"
            },
            fixed_width_still: {
              height: "113",
              width: "200",
              size: "14065",
              url:
                "https://media0.giphy.com/media/Lt2scvkIVNVPEweFKW/200w_s.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=200w_s.gif&ct=g"
            },
            looping: {
              mp4_size: "3514288",
              mp4:
                "https://media0.giphy.com/media/Lt2scvkIVNVPEweFKW/giphy-loop.mp4?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=giphy-loop.mp4&ct=g"
            },
            original_still: {
              height: "270",
              width: "480",
              size: "89789",
              url:
                "https://media0.giphy.com/media/Lt2scvkIVNVPEweFKW/giphy_s.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=giphy_s.gif&ct=g"
            },
            original_mp4: {
              height: "270",
              width: "480",
              mp4_size: "1088791",
              mp4:
                "https://media0.giphy.com/media/Lt2scvkIVNVPEweFKW/giphy.mp4?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=giphy.mp4&ct=g"
            },
            preview: {
              height: "120",
              width: "213",
              mp4_size: "40924",
              mp4:
                "https://media0.giphy.com/media/Lt2scvkIVNVPEweFKW/giphy-preview.mp4?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=giphy-preview.mp4&ct=g"
            },
            preview_gif: {
              height: "52",
              width: "92",
              size: "49095",
              url:
                "https://media0.giphy.com/media/Lt2scvkIVNVPEweFKW/giphy-preview.gif?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=giphy-preview.gif&ct=g"
            },
            preview_webp: {
              height: "82",
              width: "146",
              size: "39266",
              url:
                "https://media0.giphy.com/media/Lt2scvkIVNVPEweFKW/giphy-preview.webp?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=giphy-preview.webp&ct=g"
            },
            "480w_still": {
              height: "270",
              width: "480",
              size: "4573178",
              url:
                "https://media0.giphy.com/media/Lt2scvkIVNVPEweFKW/480w_s.jpg?cid=9f0f6425go0fd8091ko2ncqejnd27tt9gbe30f2v4g61ce5c&rid=480w_s.jpg&ct=g"
            }
          },
          user: {
            avatar_url: "https://media0.giphy.com/avatars/mlb/UTAk9uV8rZw2.jpg",
            banner_image:
              "https://media0.giphy.com/channel_assets/mlb/8Y39J0Q4HSYL.gif",
            banner_url:
              "https://media0.giphy.com/channel_assets/mlb/8Y39J0Q4HSYL.gif",
            profile_url: "https://giphy.com/mlb/",
            username: "mlb",
            display_name: "MLB",
            description:
              "Every GIF from every game of MLB! Find and share all of your favorite moments!",
            instagram_url: "https://instagram.com/mlb",
            website_url: "http://mlb.com",
            is_verified: true
          },
          analytics_response_payload:
            "e=Z2lmX2lkPUx0MnNjdmtJVk5WUEV3ZUZLVyZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9OWYwZjY0MjVnbzBmZDgwOTFrbzJuY3Flam5kMjd0dDlnYmUzMGYydjRnNjFjZTVjJmN0PWc",
          analytics: {
            onload: {
              url:
                "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUx0MnNjdmtJVk5WUEV3ZUZLVyZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9OWYwZjY0MjVnbzBmZDgwOTFrbzJuY3Flam5kMjd0dDlnYmUzMGYydjRnNjFjZTVjJmN0PWc&action_type=SEEN"
            },
            onclick: {
              url:
                "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUx0MnNjdmtJVk5WUEV3ZUZLVyZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9OWYwZjY0MjVnbzBmZDgwOTFrbzJuY3Flam5kMjd0dDlnYmUzMGYydjRnNjFjZTVjJmN0PWc&action_type=CLICK"
            },
            onsent: {
              url:
                "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUx0MnNjdmtJVk5WUEV3ZUZLVyZldmVudF90eXBlPUdJRl9UUkVORElORyZjaWQ9OWYwZjY0MjVnbzBmZDgwOTFrbzJuY3Flam5kMjd0dDlnYmUzMGYydjRnNjFjZTVjJmN0PWc&action_type=SENT"
            }
          }
        }
      ]
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.load = this.load.bind(this);
  }

  componentDidMount() {
    this.load(
      `http://api.giphy.com/v1/gifs/trending?api_key=sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh`
    );
  }

  handleClick(e) {
    const url = `http://api.giphy.com/v1/gifs/search?q=${this.state.value.replace(
      /\s/g,
      "+"
    )}&api_key=sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh`;

    this.load(url);
  }

  handleChange(e) {
    if (this.state.value !== e.target.value) {
      this.setState({ value: e.target.value });
      console.log({ value: e.target.value });
    }
  }

  load(url) {
    getAPI(url, (data) => this.setState({ gifs: data }));
  }
  render() {
    return (
      <div className="App">
        <Search
          handleClick={this.handleClick}
          handleChange={this.handleChange}
          value={this.state.value}
        />
        <Display gifs={this.state.gifs} />
      </div>
    );
  }
}

//Gif

//App: Main page with Search box and Display component
//State: searchValue, GifData
// events: handleChange & handleClick
// loadData: fetch data on click from
//Display: Get the data through props and render each gif

//Component: Article -> Render each gif with props data
//
