import React from 'react';
import dynamic from 'next/dynamic';
import config from '../config/index.json';

// Dynamically import SlickQuotes with ssr: false
const SlickQuotes = dynamic(() => import('./SlickQuotes'), { ssr: false });

const Testimony = () => {
  const { features } = config;
  // const { title, subtitle, description, items: featuresList } = features;

  return (
    <div className={`py-12 bg-background`} id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section role="complementary" className="simple white-back quotes no-fouc">
          <blockquote>
            <p><strong>to cite (verb)</strong>: to acknowledge (give credit to) the original author or artist by providing a reference.</p>
            <cite>Someone Said<br />
              <a href="#">Said it Here</a></cite>
          </blockquote>
          <blockquote>
            <p><strong>citation (noun)</strong>: a properly formatted line of text that indicates the source for a quote, idea, fact etc. that you use.</p>
            <cite>Someone Said<br />
              <a href="#">Said it Here</a></cite>
          </blockquote>
          <blockquote>
            <p>If you are repeating a section of the article for emphasis, use an aside element.</p>
            <cite>Someone Said<br />
              <a href="#">Said it Here</a></cite>
          </blockquote>
          <blockquote>
            <p>A blockquote element cannot be inside a paragraph, and since HTML4 actually needs to contain paragraphs.</p>
            <cite>Someone Said<br />
              <a href="#">Said it Here</a></cite>
          </blockquote>
          <blockquote>
            <p><strong>to cite (verb)</strong>: to acknowledge (give credit to) the original author or artist by providing a reference.</p>
            <cite>Someone Said<br />
              <a href="#">Said it Here</a></cite>
          </blockquote>
          <blockquote>
            <p><strong>citation (noun)</strong>: a properly formatted line of text that indicates the source for a quote, idea, fact etc. that you use.</p>
            <cite>Someone Said<br />
              <a href="#">Said it Here</a></cite>
          </blockquote>
          <blockquote>
            <p>If you are repeating a section of the article for emphasis, use an aside element.</p>
            <cite>Someone Said<br />
              <a href="#">Said it Here</a></cite>
          </blockquote>
          <blockquote>
            <p>A blockquote element cannot be inside a paragraph, and since HTML4 actually needs to contain paragraphs.</p>
            <cite>Someone Said<br />
              <a href="#">Said it Here</a></cite>
          </blockquote>
        </section>

        <section className="quotes">
          <div className="bubble">
            <blockquote>I refuse to accept the view that mankind is so tragically bound to the starless midnight of racism and war that the bright daybreak of peace and brotherhood can never become a reality... I believe that unarmed truth and unconditional love will have the final word.
            </blockquote>
            <div></div>
            <cite>Martin Luther King, Jr.</cite>
          </div>
          <div className="bubble">
            <blockquote>Peace is not a relationship of nations. It is a condition of mind brought about by a serenity of soul. Peace is not merely the absence of war. It is also a state of mind. Lasting peace can come only to peaceful people.
            </blockquote>
            <div></div>
            <cite>Jawaharlal Nehru</cite>
          </div>
          <div className="bubble">
            <blockquote>Forgiveness is not always easy. At times, it feels more painful than the wound we suffered, to forgive the one that inflicted it. And yet, there is no peace without forgiveness.
            </blockquote>
            <div></div>
            <cite>Marianne Williamson</cite>
          </div>
          <div className="bubble">
            <blockquote>Of all our dreams today there is none more important - or so hard to realise - than that of peace in the world. May we never lose our faith in it or our resolve to do everything that can be done to convert it one day into reality.
            </blockquote>
            <div></div>
            <cite>Lester B. Pearson</cite>
          </div>
        </section>
        <SlickQuotes />
      </div>
    </div>
  );
};

export default Testimony;
