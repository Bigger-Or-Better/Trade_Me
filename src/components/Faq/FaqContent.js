"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const FaqContent = () => {
  return (
    <>
      <div className="faq-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Find Answer Of Your Questions</h2>
          </div>

          <Accordion className="accordion-list" preExpanded={["a"]}>
            <AccordionItem uuid="a">
              <AccordionItemHeading>
                <AccordionItemButton>
                  What is Trade-Ya?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Imagine a social media app mixed with an e-commerce website that does not involve dealing with money for the most part. That is the basic gist of Trade-Ya. <br/><br/>
                  This online web service grants users the ability to get rid of stuff they do not want (but unable to sell) in exchange for stuff they would have interest in (and might not be able to afford). In the process, users can meet new people and interact with each other. <br/><br/>
                  If you've ever bartered trading cards with other kids during your younger years, gave a friend a sweet Christmas present because they gave you an awesome birthday present, or was tipped of with a useful secret from a friend who owed ya; then you know how fun it trading can be!
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="b">
              <AccordionItemHeading>
                <AccordionItemButton>
                  How does it work?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Step 0: create your own profile<br/>
                  Step 1: upload items to use as bartering materials. <br/>
                  Step 2: find listings posted by other traders that you have interest in <br/>
                  Step 3: communicate and negotiate with owner of desired item.<br/>
                  Step 4: meet the other trader at a secure location to exchange agreed trading items.<br/>
                  Step 5: return to website to confirm trade sucess<br/>
                  Step 6: repeat!
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="c">
              <AccordionItemHeading>
                <AccordionItemButton>
                  Why was Trade-Ya created?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Aside from being a unique business idea, Trade-Ya was created for the following reasons:<br/>
                  - Help people who are low on money obtain needed or desired items<br/>
                  - Help people get rid of excessive items that they can't sell of<br/>
                  - Give people opportunities to meet others in a fun and adventurous new way!

                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="d">
              <AccordionItemHeading>
                <AccordionItemButton>
                  Is Trade-Ya Safe?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Trade-Ya is as safe as you make it!<br/> 
                  It is encouraged for users to make smart choices in who they interact with.<br/>
                  Follow this link for safety tips!
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="e">
              <AccordionItemHeading>
                <AccordionItemButton>
                  Why should I use Trade-Ya instead of simply selling online?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  You could turn to Facebook Marketplace or KSL or some other online resource to find new stuff for free or sell stuff you don't need.<br/>
                  You could ALSO use Trade-Ya as an additional means to fulfill the above objectives. Why limit yourself?
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="f">
              <AccordionItemHeading>
                <AccordionItemButton>Anything else I should know?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Trade-Ya is still in its development phase. Please be patient. We encourage constructive feedback pertaining how Trade-Ya can improve.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default FaqContent;
