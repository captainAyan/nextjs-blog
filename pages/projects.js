import styles from "../styles/Main.module.css";
import Lucafy from "../components/projects/Lucafy";
import Quiz from "../components/projects/Quiz";
import AnonMsgs from "../components/projects/AnonMsgs";
import ChatMeeting from "../components/projects/ChatMeeting";
import LocationShare from "../components/projects/LocationShare";
import PixelProfilePic from "../components/projects/PIxelProfilePic";
import PixelArt from "../components/projects/PixelArt";
import Minesweeper from "../components/projects/Minesweeper";
import AccountLiteAndroid from "../components/projects/AccountLiteAndroid";
import AccountLiteDesktop from "../components/projects/AccountLiteDesktop";
import AccountLiteCLI from "../components/projects/AccountLiteCLI";
import CrappyBirdie from "../components/projects/CrappyBirdie";
import SpaceShooter from "../components/projects/SpaceShooter";
import { useRouter } from "next/router";

export default function Projects() {
  const projectTags = {
    lucafy: ["mern", "accounting"],
    quiz: ["mern"],
    accountlite_android: ["android", "accounting"],
    accountlite_desktop: ["python", "accounting", "tkinter"],
    accountlite_cli: ["c++", "accounting", "cli"],
    anon_msgs: ["mern", "message"],
    chat_meeting: ["mern", "socket", "message"],
    crappy_birdie: ["game", "android", "godot"],
    space_shooter: ["canvas", "game"],
    location_share: ["android", "map", "kotlin"],
    pixel_profile_pic: ["webapi", "canvas"],
    pixel_art: ["canvas"],
    minesweeper: ["python", "game", "tkinter"],
  };

  const extractTags = () => {
    let _tags = []; // collection of unique tags
    for (const key in projectTags) {
      if (Object.hasOwnProperty.call(projectTags, key)) {
        const tagValues = projectTags[key]; // tags of a particular project
        for (const tag of tagValues) {
          if (!_tags.includes(tag)) _tags = [..._tags, tag];
        }
      }
    }
    return _tags;
  };
  let tags = extractTags();

  const router = useRouter();
  const { tag: selectedTag } = router.query;

  return (
    <div className={styles.container}>
      <h1>Projects</h1>
      <p>
        &nbsp;
        {!selectedTag ? null : <>#{selectedTag}</>}
      </p>

      <p style={{ wordWrap: "break-word", wordSpacing: "8px" }}>
        <span>
          <a href="?">All</a>
          &nbsp;
        </span>
        {tags.map((tag) => {
          return (
            <span key={tag}>
              <a href={`?tag=${tag}`}>#{tag}</a>
              &nbsp;
            </span>
          );
        })}
      </p>
      <hr />

      {projectTags.lucafy.includes(selectedTag) || !selectedTag ? (
        <Lucafy />
      ) : null}
      {projectTags.quiz.includes(selectedTag) || !selectedTag ? <Quiz /> : null}
      {projectTags.accountlite_android.includes(selectedTag) || !selectedTag ? (
        <AccountLiteAndroid />
      ) : null}
      {projectTags.accountlite_desktop.includes(selectedTag) || !selectedTag ? (
        <AccountLiteDesktop />
      ) : null}
      {projectTags.accountlite_cli.includes(selectedTag) || !selectedTag ? (
        <AccountLiteCLI />
      ) : null}
      {projectTags.anon_msgs.includes(selectedTag) || !selectedTag ? (
        <AnonMsgs />
      ) : null}
      {projectTags.chat_meeting.includes(selectedTag) || !selectedTag ? (
        <ChatMeeting />
      ) : null}
      {projectTags.location_share.includes(selectedTag) || !selectedTag ? (
        <LocationShare />
      ) : null}
      {projectTags.crappy_birdie.includes(selectedTag) || !selectedTag ? (
        <CrappyBirdie />
      ) : null}
      {projectTags.space_shooter.includes(selectedTag) || !selectedTag ? (
        <SpaceShooter />
      ) : null}
      {projectTags.pixel_profile_pic.includes(selectedTag) || !selectedTag ? (
        <PixelProfilePic />
      ) : null}
      {projectTags.pixel_art.includes(selectedTag) || !selectedTag ? (
        <PixelArt />
      ) : null}
      {projectTags.minesweeper.includes(selectedTag) || !selectedTag ? (
        <Minesweeper />
      ) : null}
    </div>
  );
}
