import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';

const Chats = () => {
  const history = useHistory();
  const { user } = useAuth();
  const [loaging, setLoading] = useState(true);

  console.log(user);
  const handleLogout = async () => {
    await auth.signOut();

    history.push('/');
  };

  //pegar foto
  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();

    return new File([data], 'userPhoto.jpg', { type: 'image/jpeg' });
  };

  useEffect(() => {
    if (!user) {
      history.push('/');
      return;
    }

    axios
      .get('https://api.chatengine.io/users/me', {
        headers: {
          'project-id': '8a27c9f4-f157-4577-b093-0219c0556f64',
          'user-name': user.email,
          'user-secret': user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append('email', user.email);
        formdata.append('username', user.email);
        formdata.append('secret', user.uid);
        // fix CORS
        //formdata.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        //formdata.append('Access-Control-Allow-Credentials', 'true');

        getFile(user.photoURL).then((avatar) => {
          formdata.append('avatar', avatar, avatar.name);

          axios
            .post('https://api.chatengine.io/users', formdata, {
              headers: {
                'private-key': process.env.REACT_APP_ENGINE_KEY,
              },
            })
            .then(() => setLoading(false))
            .catch((error) => console.log(error));
        });
      });
  }, [user, history]);

  if (!user || loaging) return 'Carregando....';

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">React Chat</div>
        <div className="logout-tab" onClick={handleLogout}>
          Sair
        </div>
      </div>
      <ChatEngine
        height="calc(100vh -66px)"
        projectID={process.env.REACT_APP_CHAT_ENGINE_ID}
        userName={user.email}
        userSecret={user.uid}
      ></ChatEngine>
    </div>
  );
};

export default Chats;
