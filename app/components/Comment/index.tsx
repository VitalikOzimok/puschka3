import { ClassType } from "../../shared/type";

import { motion } from "framer-motion";

import Comment from "./comment";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://sun9-36.userapi.com/impg/_6dK58soVHKHdQ0KXdFjFmI3jIb9KqBh1z4-xg/RyMDHhyImHo.jpg?size=1920x1440&quality=96&sign=201c87c561ac6dd181a65f4c2529d955&type=album",
  },
  {
    name: "Yoga Classes",
    image:
      "https://sun9-3.userapi.com/impg/cHeSOUYjWcBR_lxTNh-qN4iduf1cyUm_2FNFWg/kSkidslnsXA.jpg?size=1920x1440&quality=96&sign=0a1130a9333e738515709baec2b98db1&type=album",
  },
  {
    name: "Ab Core Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://sun9-36.userapi.com/impg/_6dK58soVHKHdQ0KXdFjFmI3jIb9KqBh1z4-xg/RyMDHhyImHo.jpg?size=1920x1440&quality=96&sign=201c87c561ac6dd181a65f4c2529d955&type=album",
  },
  {
    name: "Adventure Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://sun9-3.userapi.com/impg/cHeSOUYjWcBR_lxTNh-qN4iduf1cyUm_2FNFWg/kSkidslnsXA.jpg?size=1920x1440&quality=96&sign=0a1130a9333e738515709baec2b98db1&type=album",
  },
  {
    name: "Fitness Classes",
    image:
      "https://sun9-36.userapi.com/impg/_6dK58soVHKHdQ0KXdFjFmI3jIb9KqBh1z4-xg/RyMDHhyImHo.jpg?size=1920x1440&quality=96&sign=201c87c561ac6dd181a65f4c2529d955&type=album",
  },
  {
    name: "Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://sun9-3.userapi.com/impg/cHeSOUYjWcBR_lxTNh-qN4iduf1cyUm_2FNFWg/kSkidslnsXA.jpg?size=1920x1440&quality=96&sign=0a1130a9333e738515709baec2b98db1&type=album",
  },
];

const OurClasses = () => {
  return (
    <section className="w-full  py-10">
      <motion.div>
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <h1 className="py-2 text-3xl uppercase font-sanss font-extrabold items-center flex ">
              our happy customers
            </h1>
            <p className="py-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </div>
        </motion.div>
        <div className=" h-[353px] w-full  rounded-xl  overflow-x-auto overflow-y-hidden">
          <ul className=" whitespace-nowrap ">
            {classes.map((item: ClassType, index) => (
              <Comment
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
