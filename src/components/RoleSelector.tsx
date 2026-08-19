import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  UserCog, 
  Stethoscope, 
  User, 
  Pill, 
  ChevronDown 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const roles = [
  { 
    id: 'admin', 
    name: 'Admin', 
    icon: UserCog, 
    path: '/admin',
    description: 'System Administration'
  },
  { 
    id: 'doctor', 
    name: 'Doctor', 
    icon: Stethoscope, 
    path: '/doctor',
    description: 'Medical Professional'
  },
  { 
    id: 'patient', 
    name: 'Patient', 
    icon: User, 
    path: '/patient',
    description: 'Healthcare Consumer'
  },
  { 
    id: 'pharmacy', 
    name: 'Pharmacy', 
    icon: Pill, 
    path: '/pharmacy',
    description: 'Medicine Provider'
  },
];

export const RoleSelector = () => {
  const navigate = useNavigate();

  const handleRoleSelect = (path: string) => {
    navigate(path);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="medical" size="lg" className="gap-2">
          <User className="h-5 w-5" />
          Select Role
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-64 bg-popover border shadow-medical">
        {roles.map((role) => {
          const IconComponent = role.icon;
          return (
            <DropdownMenuItem
              key={role.id}
              onClick={() => handleRoleSelect(role.path)}
              className="flex items-center gap-3 p-4 cursor-pointer hover:bg-accent rounded-md transition-smooth"
            >
              <div className="flex-shrink-0">
                <IconComponent className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-foreground">{role.name}</div>
                <div className="text-sm text-muted-foreground">{role.description}</div>
              </div>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};