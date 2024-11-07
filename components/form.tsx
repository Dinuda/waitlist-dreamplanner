'use client'

import Link from "next/link";
import { ChangeEvent } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaArrowRightLong } from "react-icons/fa6";
import { EnhancedButton } from "@/components/ui/enhanced-btn";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

interface FormProps {
  name: string;
  email: string;
  phone: string;
  gender: string;
  university: string;
  faculty: string;
  handleNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handlePhoneChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleGenderChange: (value: string) => void;
  handleUniversityChange: (value: string) => void;
  handleFacultyChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  loading: boolean;
}

export default function Component({
  name,
  email,
  phone,
  gender,
  university,
  faculty,
  handleNameChange,
  handleEmailChange,
  handlePhoneChange,
  handleGenderChange,
  handleUniversityChange,
  handleFacultyChange,
  handleSubmit,
  loading,
}: FormProps = {
  name: '',
  email: '',
  phone: '',
  gender: '',
  university: '',
  faculty: '',
  handleNameChange: () => {},
  handleEmailChange: () => {},
  handlePhoneChange: () => {},
  handleGenderChange: () => {},
  handleUniversityChange: () => {},
  handleFacultyChange: () => {},
  handleSubmit: () => {},
  loading: false,
}) {
  return (
    <motion.div
      className="mt-6 flex w-full max-w-[24rem] flex-col gap-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants}>
        <Input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={handleNameChange}
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Input
          type="email"
          placeholder="Your Email Address"
          value={email}
          onChange={handleEmailChange}
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Input
          type="tel"
          placeholder="Your Phone Number"
          value={phone}
          onChange={handlePhoneChange}
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Select value={gender} onValueChange={handleGenderChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select Gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </motion.div>
      <motion.div variants={itemVariants}>
        <Select value={university} onValueChange={handleUniversityChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select University" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="university2">University of Sri Jayewardenepura            </SelectItem>
            {/* Add more universities as needed */}
          </SelectContent>
        </Select>
      </motion.div>
      <motion.div variants={itemVariants}>
        <Input
          type="text"
          placeholder="Your Faculty"
          value={faculty}
          onChange={handleFacultyChange}
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <EnhancedButton
          variant="expandIcon"
          Icon={FaArrowRightLong}
          onClick={handleSubmit}
          iconPlacement="right"
          className="mt-2 w-full"
          disabled={loading}>
          {loading ? "Loading..." : "Join Waitlist!"}
        </EnhancedButton>
      </motion.div>
      
    </motion.div>
  );
}