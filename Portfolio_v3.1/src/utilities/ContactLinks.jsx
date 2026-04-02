import { digitalSpaces, contactInfo } from "../constants";
import TimeFormat from "./TimeFormat";

const ContactLinks = () => {
  return (
    <div className="max-w-2xl mx-auto mt-10">
      {/* 3 Column Layout on 2XL */}
      <div className="grid gap-10 text-center md:text-left 2xl:grid-cols-3">
        {/* Contact Details */}
        <div className="space-y-3">
          <h3 className="font-cabinet font-bold text-xl text-slate-900">
            Contact Details
          </h3>

          {contactInfo.slice(0, 2).map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="group relative flex items-center justify-center md:justify-start gap-2 text-slate-600 hover:text-amber-700 transition-colors"
            >
              <item.icon className="w-4 h-4" />
              <span className="relative font-cabinet">
                {item.label}
                {/* Underline */}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>
          ))}
        </div>

        {/* Digital Spaces */}
        <div className="space-y-3">
          <h3 className="font-cabinet font-bold text-xl text-right text-slate-900">
            My Digital Spaces
          </h3>

          {digitalSpaces.map((space, idx) => (
            <a
              key={idx}
              href={space.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-2 text-slate-600 cursor-alias"
            >
              <space.icon className="w-4 h-4" />
              <span className="relative font-cabinet text-right cursor-pointer hover:text-amber-700 transition-colors">
                {space.label}
                {/* Underline */}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>
          ))}
        </div>

        {/* Location */}
        <div className="space-y-2">
          <h3 className="font-cabinet font-bold text-xl text-right text-slate-900">
            Location
          </h3>

          <div className="flex items-center justify-center md:justify-end gap-2 text-slate-600">
            {(() => {
              const LocationIcon = contactInfo[2].icon;
              return <LocationIcon className="w-4 h-4" />;
            })()}
            <span className="relative font-cabinet">
              {contactInfo[2].label}
              {/* Optional underline if you want on location too */}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </div>

          <div className="flex items-end gap-1">
            <TimeFormat />
            <span className="text-md font-cabinet text-slate-600 mb-1 ">
              PM
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactLinks;
