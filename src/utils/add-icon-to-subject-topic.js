import React from 'react';
import { TbDog } from 'react-icons/tb';
import { GiNinjaHeroicStance, GiThrowingBall, GiGreekTemple } from 'react-icons/gi';
import { MdOutlineScience, MdOutlineTheaterComedy } from 'react-icons/md';
import {
  BsFillStarFill,
  BsBook,
  BsFilm,
  BsMusicNoteBeamed,
  BsCameraReels,
  BsController,
  BsDice6,
  BsBrush,
  BsRobot,
  BsBarChartLine,
  BsMortarboard,
  BsGlobe,
  BsGlobeAmericas,
  BsHourglassSplit,
  BsCarFront,
  BsGearWideConnected,
  BsEmojiSmile,
  BsChatDots
} from 'react-icons/bs';

function changeCategoryName(string) {
  let changeName = string;
  changeName = changeName.replaceAll('Entertainment:', '');
  changeName = changeName.replaceAll('Science:', '');
  changeName = changeName.replaceAll('Japanese', '');
  changeName = changeName.replaceAll('Mathematics', 'Math');
  changeName = changeName.replaceAll('Video Games', 'Games');
  return changeName;
}

function addIconToSubjectResponse(response) {
  const categoryIcon = {
    9: <BsMortarboard color="86608E" />,
    10: <BsBook color="86608E" />,
    11: <BsFilm color="86608E" />,
    12: <BsMusicNoteBeamed color="86608E" />,
    13: <MdOutlineTheaterComedy color="86608E" />,
    14: <BsCameraReels color="86608E" />,
    15: <BsController color="86608E" />,
    16: <BsDice6 color="86608E" />,
    17: <MdOutlineScience color="86608E" />,
    18: <BsRobot color="86608E" />,
    19: <BsBarChartLine color="86608E" />,
    20: <GiGreekTemple color="86608E" />,
    21: <GiThrowingBall color="86608E" />,
    22: <BsGlobeAmericas color="86608E" />,
    23: <BsHourglassSplit color="86608E" />,
    24: <BsGlobe color="86608E" />,
    25: <BsBrush color="86608E" />,
    26: <BsFillStarFill color="86608E" />,
    27: <TbDog color="86608E" />,
    28: <BsCarFront color="86608E" />,
    29: <BsChatDots color="86608E" />,
    30: <BsGearWideConnected color="86608E" />,
    31: <GiNinjaHeroicStance color="86608E" />,
    32: <BsEmojiSmile color="86608E" />
  };
  response.map((item) => {
    item.name = changeCategoryName(item.name);
  });

  return response.map((item) => ({ ...item, icon: categoryIcon[item.id] }));
}

export default addIconToSubjectResponse;
