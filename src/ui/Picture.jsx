function Picture() {
  return (
    <div className="max-xs:w-[110%] relative flex justify-end max-xl:mx-auto max-xl:w-2/3 max-lg:w-[83%] max-md:w-full">
      <img
        src="photo.jpg"
        alt="ProfilePicture"
        className="max-xxs:h-[80%] absolute z-10 h-full w-2/3 -translate-8 rounded-sm"
      />
      <div className="bg-primary-light max-xxs:h-[80%] absolute z-1 h-full w-2/3 rounded-sm"></div>
      <p className="bg-secondary text-primary z-100 mr-auto mb-4 w-3/4 self-end p-3 text-justify text-sm">
        "Many ideas grow better when transplanted into another mind than the one
        where they sprang up." – Oliver Wendell Holmes
      </p>
    </div>
  );
}

export default Picture;
