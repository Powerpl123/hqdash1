export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      attendance: {
        Row: {
          created_at: string
          date: string
          department: Database["public"]["Enums"]["department_type"] | null
          id: string
          notes: string | null
          status: Database["public"]["Enums"]["attendance_status"]
          updated_at: string
          uploaded_by: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          date: string
          department?: Database["public"]["Enums"]["department_type"] | null
          id?: string
          notes?: string | null
          status?: Database["public"]["Enums"]["attendance_status"]
          updated_at?: string
          uploaded_by?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          date?: string
          department?: Database["public"]["Enums"]["department_type"] | null
          id?: string
          notes?: string | null
          status?: Database["public"]["Enums"]["attendance_status"]
          updated_at?: string
          uploaded_by?: string | null
          user_id?: string
        }
        Relationships: []
      }
      insurance_requests: {
        Row: {
          attachment_url: string | null
          created_at: string
          id: string
          processed_at: string | null
          processed_by: string | null
          reason: string
          response_url: string | null
          status: Database["public"]["Enums"]["request_status"]
          type: Database["public"]["Enums"]["insurance_type"]
          updated_at: string
          user_id: string
        }
        Insert: {
          attachment_url?: string | null
          created_at?: string
          id?: string
          processed_at?: string | null
          processed_by?: string | null
          reason: string
          response_url?: string | null
          status?: Database["public"]["Enums"]["request_status"]
          type: Database["public"]["Enums"]["insurance_type"]
          updated_at?: string
          user_id: string
        }
        Update: {
          attachment_url?: string | null
          created_at?: string
          id?: string
          processed_at?: string | null
          processed_by?: string | null
          reason?: string
          response_url?: string | null
          status?: Database["public"]["Enums"]["request_status"]
          type?: Database["public"]["Enums"]["insurance_type"]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      leave_requests: {
        Row: {
          approved_at: string | null
          approved_by: string | null
          attachment_url: string | null
          created_at: string
          end_date: string
          id: string
          reason: string | null
          start_date: string
          status: Database["public"]["Enums"]["request_status"]
          type: Database["public"]["Enums"]["leave_type"]
          updated_at: string
          user_id: string
        }
        Insert: {
          approved_at?: string | null
          approved_by?: string | null
          attachment_url?: string | null
          created_at?: string
          end_date: string
          id?: string
          reason?: string | null
          start_date: string
          status?: Database["public"]["Enums"]["request_status"]
          type: Database["public"]["Enums"]["leave_type"]
          updated_at?: string
          user_id: string
        }
        Update: {
          approved_at?: string | null
          approved_by?: string | null
          attachment_url?: string | null
          created_at?: string
          end_date?: string
          id?: string
          reason?: string | null
          start_date?: string
          status?: Database["public"]["Enums"]["request_status"]
          type?: Database["public"]["Enums"]["leave_type"]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      permissions: {
        Row: {
          access_area: string
          can_delete: boolean | null
          can_edit: boolean | null
          can_upload: boolean | null
          can_view: boolean | null
          created_at: string
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          access_area: string
          can_delete?: boolean | null
          can_edit?: boolean | null
          can_upload?: boolean | null
          can_view?: boolean | null
          created_at?: string
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          access_area?: string
          can_delete?: boolean | null
          can_edit?: boolean | null
          can_upload?: boolean | null
          can_view?: boolean | null
          created_at?: string
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          department: Database["public"]["Enums"]["department_type"] | null
          email: string | null
          id: string
          name: string | null
          position: string | null
          role: Database["public"]["Enums"]["user_role"] | null
          status: string | null
          updated_at: string
          username: string | null
        }
        Insert: {
          created_at?: string
          department?: Database["public"]["Enums"]["department_type"] | null
          email?: string | null
          id?: string
          name?: string | null
          position?: string | null
          role?: Database["public"]["Enums"]["user_role"] | null
          status?: string | null
          updated_at?: string
          username?: string | null
        }
        Update: {
          created_at?: string
          department?: Database["public"]["Enums"]["department_type"] | null
          email?: string | null
          id?: string
          name?: string | null
          position?: string | null
          role?: Database["public"]["Enums"]["user_role"] | null
          status?: string | null
          updated_at?: string
          username?: string | null
        }
        Relationships: []
      }
      system_logs: {
        Row: {
          action: string
          id: string
          metadata: Json | null
          notes: string | null
          performed_by: string
          target_user: string | null
          timestamp: string
        }
        Insert: {
          action: string
          id?: string
          metadata?: Json | null
          notes?: string | null
          performed_by: string
          target_user?: string | null
          timestamp?: string
        }
        Update: {
          action?: string
          id?: string
          metadata?: Json | null
          notes?: string | null
          performed_by?: string
          target_user?: string | null
          timestamp?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_user_role: {
        Args: { user_uuid?: string }
        Returns: Database["public"]["Enums"]["user_role"]
      }
      is_hr_user: {
        Args: { user_uuid?: string }
        Returns: boolean
      }
      is_it_user: {
        Args: { user_uuid?: string }
        Returns: boolean
      }
      is_system_admin: {
        Args: { user_uuid?: string }
        Returns: boolean
      }
      log_system_action: {
        Args: {
          action_text: string
          target_user_id?: string
          notes_text?: string
          metadata_json?: Json
        }
        Returns: string
      }
    }
    Enums: {
      attendance_status: "present" | "absent" | "late" | "half_day"
      department_type:
        | "IT"
        | "HQ"
        | "HR"
        | "HR Department"
        | "Administration"
        | "Operators"
        | "Maintenance"
        | "Drivers"
      insurance_type: "health" | "life" | "accident" | "vehicle" | "property"
      leave_type:
        | "sick"
        | "annual"
        | "emergency"
        | "maternity"
        | "paternity"
        | "unpaid"
      request_status: "pending" | "approved" | "rejected" | "cancelled"
      user_role:
        | "system_admin"
        | "admin_officer"
        | "it_manager"
        | "it_officer"
        | "it_support"
        | "hr_manager"
        | "hr_officer"
        | "gm_assistant"
        | "external_admin"
        | "operator"
        | "maintenance"
        | "driver"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      attendance_status: ["present", "absent", "late", "half_day"],
      department_type: [
        "IT",
        "HQ",
        "HR",
        "HR Department",
        "Administration",
        "Operators",
        "Maintenance",
        "Drivers",
      ],
      insurance_type: ["health", "life", "accident", "vehicle", "property"],
      leave_type: [
        "sick",
        "annual",
        "emergency",
        "maternity",
        "paternity",
        "unpaid",
      ],
      request_status: ["pending", "approved", "rejected", "cancelled"],
      user_role: [
        "system_admin",
        "admin_officer",
        "it_manager",
        "it_officer",
        "it_support",
        "hr_manager",
        "hr_officer",
        "gm_assistant",
        "external_admin",
        "operator",
        "maintenance",
        "driver",
      ],
    },
  },
} as const
