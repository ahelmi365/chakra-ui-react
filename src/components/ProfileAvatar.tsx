import { Avatar, AvatarBadge, ResponsiveValue } from "@chakra-ui/react";
interface Props {
  profileImage: string;
  size: ResponsiveValue<string>;
}
const ProfileAvatar = ({ profileImage, size }: Props) => {
  return (
    <Avatar
      name="Profile avatar"
      src={profileImage}
      size={size}
      border={"1px solid gray"}
    >
      <AvatarBadge boxSize="1em" bg="green.500" />
    </Avatar>
  );
};

export default ProfileAvatar;
