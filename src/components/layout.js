import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Transition } from "react-spring";
import { Segment, Sidebar } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import {
  DrawerContext,
  DrawerProvider,
  MessengerContext,
  MessengerProvider
} from "../providers";
import Drawer from "./drawer";
import Messenger from "./messenger";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <DrawerProvider>
          <MessengerProvider>
            <MessengerContext.Consumer>
              {({ message }) => (
                <Transition
                  from={{ top: "-200px" }}
                  enter={{ top: "0" }}
                  leave={{ top: "-300px" }}
                >
                  {message && (style => <Messenger style={style} />)}
                </Transition>
              )}
            </MessengerContext.Consumer>
            <Sidebar.Pushable>
              <Navbar />
              <DrawerContext.Consumer>
                {({ isOpen }) => <Drawer visible={isOpen} />}
              </DrawerContext.Consumer>
              <Segment
                style={{
                  minHeight: "100vh",
                  paddingTop: "49px"
                }}
              >
                <Sidebar.Pusher>{children}</Sidebar.Pusher>
              </Segment>
            </Sidebar.Pushable>
          </MessengerProvider>
        </DrawerProvider>
      )}
    />
  );
}
