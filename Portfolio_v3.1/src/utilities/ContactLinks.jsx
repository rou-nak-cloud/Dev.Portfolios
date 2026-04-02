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
              className="flex items-center justify-center md:justify-start gap-2 text-slate-600 hover:text-amber-500 transition-colors"
            >
              <item.icon className="w-4 h-4" />
              <span className="font-cabinet">{item.label}</span>
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
              className="flex items-center justify-center md:justify-end gap-2 text-slate-600 hover:text-amber-500 transition-colors"
            >
              <space.icon className="w-4 h-4" />
              <span className="font-cabinet text-right">{space.label}</span>
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
            <span className="font-cabinet">{contactInfo[2].label}</span>
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
