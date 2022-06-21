import { HTMLAttributes, memo, ReactElement, ReactNode } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { GroupCard } from "./group_card";
import { ProfileCard } from "./profile_card";
import { RoomCard } from "./room_card";
interface Props extends HTMLAttributes<HTMLDivElement> {}

export function SearchCardButtom({}: Props): ReactElement {
  const [params] = useSearchParams();
  const searchParams = params.get("search");
  const profileCards = (
    <div className="w-100 profile-Card-Items">
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
    </div>
  );
  const roomCards = (
    <div className="w-100 room-Card-Items pb-4 pt-2">
      <div className="roomCard-Container">
        <RoomCard />
      </div>
      <div className="roomCard-Container">
        <RoomCard />
      </div>
    </div>
  );
  const groupCards = (
    <div className="group-Card-Items mt-4">
      <GroupCard />
      <GroupCard />
      <GroupCard />
      <GroupCard />
    </div>
  );

  const searchRenderFunction = () => {
    let searchRender;
    if (searchParams === "people") {
      return profileCards;
    } else if (searchParams === "group") {
      return groupCards;
    } else if (searchParams === "rooms") {
      return roomCards;
    } else {
      searchRender = [profileCards, roomCards, groupCards];
    }
    return searchRender;
  };

  return (
    <div className="search-input-card-button d-flex flex-column align-items-center justify-content-start">
      <div className="w-100 search-Link-Container d-flex flex-row align-items-center justify-content-between">
        <Link
          to="#"
          className={!searchParams ? "active-Search-Link" : "search-Link"}
        >
          همه
        </Link>
        <Link
          to="?search=people"
          className={
            searchParams === "people" ? "active-Search-Link" : "search-Link"
          }
        >
          افراد
        </Link>
        <Link
          to="?search=group"
          className={
            searchParams === "group" ? "active-Search-Link" : "search-Link"
          }
        >
          گروه ها
        </Link>
        <Link
          to="?search=rooms"
          className={
            searchParams === "rooms" ? "active-Search-Link" : "search-Link"
          }
        >
          اتاق ها
        </Link>
      </div>
      {searchRenderFunction()}
    </div>
  );
}

export default memo(SearchCardButtom);
