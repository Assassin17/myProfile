/* import {ExternalLinkIcon} from '@heroicons/react/outline';
import {CalendarIcon} from '@heroicons/react/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, MouseEvent, useCallback, useEffect, useRef, useState} from 'react';

import {isMobile} from '../../config';
import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import Section from '../Layout/Section'; */

/* const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">Travel Diary</h2>
        <div className=" w-full columns-2 md:columns-3 lg:columns-4">
          {portfolioItems.map((item, index) => {
            const {title, image} = item;
            return (
              <div className="pb-6" key={`${title}-${index}`}>
                <div
                  className={classNames(
                    'relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl',
                  )}>
                  <Image alt={title} layout="responsive" placeholder="blur" src={image} style={{ width: '100%', height: '250px', objectFit: 'cover' }}/>
                  <ItemOverlay item={item} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Travel Diary'; */

import {CalendarIcon, CheckCircleIcon} from '@heroicons/react/outline';
//import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {portfolioItems, SectionId} from '../../data/data';
//import {PortfolioItem} from '../../data/dataDef';
import Section from '../Layout/Section';


const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">Upcoming Events 2025</h2>

        {/* Change from columns to grid for consistent card layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => {
            const {title, image, description, status ,completed} = item;

            // Split description to extract date and details
            const parts = description.split(' - ');
            const date = parts[0];
            const details = parts.length > 1 ? parts[1] : '';

            // Check if the event has been visited
            const isVisited = completed && completed.toLowerCase() === 'yes';

            return (
              <div className="flex flex-col" key={`${title}-${index}`}>
                <div className="bg-neutral-700 rounded-lg overflow-hidden shadow-lg shadow-black/30">
                  {/* Image with consistent height */}
                  <div className="relative h-48 w-full">
                    <Image
                      alt={title}
                      src={image}
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                    />

                    {/* Green tick for visited events */}
                    {isVisited && (
                      <div className="absolute top-2 right-2">
                        <CheckCircleIcon className="h-8 w-8 text-green-500 bg-white rounded-full" />
                      </div>
                    )}
                  </div>

                  {/* Event details section */}
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-white mb-2">{title}</h3>

                    {/* Date with calendar icon */}
                    <div className="flex items-center mb-2">
                      <CalendarIcon className="h-4 w-4 text-blue-300 mr-2" />
                      <span className="text-blue-300 text-sm font-medium">{date}</span>
                    </div>

                    {/* Status display in text form */}
                    {status && (
                      <div className="flex items-center mb-2">
                        <span className={`text-sm font-medium ${
                          status.toLowerCase() === 'Going' ? 'text-green-400' :
                          status.toLowerCase() === 'Tentative' ? 'text-yellow-400' :
                          status.toLowerCase() === 'pending' ? 'text-blue-400':
                        }`}>
                          Status: {status}
                        </span>
                      </div>
                    )}

                    {/* Details */}
                    <p className="text-sm text-neutral-300">{details}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
});



Portfolio.displayName = 'UpcomingEvents';
export default Portfolio;

/*

const ItemOverlay: FC<{item: PortfolioItem}> = memo(({item: {url, title, description}}) => {
  const [mobile, setMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Avoid hydration styling errors by setting mobile in useEffect
    if (isMobile) {
      setMobile(true);
    }
  }, []);
  useDetectOutsideClick(linkRef, () => setShowOverlay(false));

  const handleItemClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (mobile && !showOverlay) {
        event.preventDefault();
        setShowOverlay(!showOverlay);
      }
    },
    [mobile, showOverlay],
  );

  return (
    <a
      className={classNames(
        'absolute inset-0 h-full w-full  bg-gray-900 transition-all duration-300',
        {'opacity-0 hover:opacity-80': !mobile},
        showOverlay ? 'opacity-80' : 'opacity-0',
      )}
      href={url}
      onClick={handleItemClick}
      ref={linkRef}
      target="_blank">
      <div className="relative h-full w-full p-4">
        <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto">
          <h2 className="text-center font-bold text-white opacity-100">{title}</h2>
          <p className="text-xs text-white opacity-100 sm:text-sm">{description}</p>
        </div>
        <ExternalLinkIcon className="absolute bottom-1 right-1 h-4 w-4 shrink-0 text-white sm:bottom-2 sm:right-2" />
      </div>
    </a>
  );
});
 */
