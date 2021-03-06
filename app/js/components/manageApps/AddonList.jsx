/*
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
import React from 'react';

export const AddonList = ({handleDownload, install, appList, openPage, openModal}) => {
  return (
    <tbody>
      {
        appList.map((app, key) => {
          return (
            <tr key={key}>
              <td onClick={() => openPage(app)}>
                <img
                  src={app.icons !== null ? 
                    `/${location.href.split('/')[3]}/owa/openmrs-addonmanager/${app.icons[48]}` : 
                    `./img/omrs-button.png`}
                  alt="addon logo"
                />
              </td>
              <td onClick={() => openPage(app)}>
                <div className="addon-name">{app.name}</div>
                <div><h5  className="addon-description">{app.description}</h5></div>
              </td>
              <td onClick={() => openPage(app)}>
                {app.developer ? app.developer.name : app.maintainers[0].name}
              </td>
              <td onClick={() => openPage(app)}>
                {app.version ? app.version : app.latestVersion}
              </td>
              <td
                className="text-center"
                id="delete-icon-wrapper"
              >
                {
                  install === false ? 
                    <i
                      className="glyphicon glyphicon-trash text-danger delete-icon"
                      id="icon-btn" onClick={openModal(app)}
                    /> :
                    <i
                      className="glyphicon glyphicon-download-alt text-primary install-icon"
                      id="icon-btn"
                      onClick={(e) => handleDownload(e)}
                    />
                }
              </td>           
            </tr>
          );
        })
      }
    </tbody>
  );
};

AddonList.propTypes = {
  handleDownload: React.PropTypes.func.isRequired,
  install: React.PropTypes.bool.isRequired,
  appList: React.PropTypes.array.isRequired,
  openPage: React.PropTypes.func.isRequired, 
  openModal: React.PropTypes.func.isRequired
};
