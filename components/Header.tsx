import React from "react";
import Link from "next/link";

import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";

import { useAuthUser } from "next-firebase-auth";

const styles = {
  container: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 16,
  },
  button: {
    marginLeft: 16,
    cursor: "pointer",
  },
};

const Header = () => {
  const auth = useAuthUser();

  const { email, signOut } = auth;
  const { photoURL, displayName } = auth?.firebaseUser || {};
  return (
    <div style={styles.container}>
      {email ? (
        <>
          <Avatar size="md" name={displayName} src={photoURL} />
          <p>{email}</p>
          <button
            type="button"
            onClick={() => {
              signOut();
            }}
            style={styles.button}>
            Sign out
          </button>
        </>
      ) : (
        <>
          <p>You are not signed in.</p>
          <Link href="/auth">
            <a>
              <button type="button" style={styles.button}>
                Sign in
              </button>
            </a>
          </Link>
        </>
      )}
    </div>
  );
};

export default Header;
